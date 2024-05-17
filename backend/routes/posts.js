const express = require("express");
const { PrismaClient, Prisma } = require("@prisma/client");
const { authenticateToken, processString } = require("../helpers");
const { checkSchema, validationResult } = require("express-validator");
const { createPostSchema, editPostSchema } = require("../schemas");

const prisma = new PrismaClient();
const router = express.Router();

router.get("/", async (req, res) => {
  let posts;
  try {
    posts = await prisma.post.findMany({
      select: {
        id: true,
        thumbnailUrl: true,
        title: true,
        description: true,
        content: true,
        publishedOn: true,
        author: {
          select: {
            name: true,
          },
        },
        userId: true,
        slug: true,
        tags: true,
        metaTitle: true,
        metaDescription: true,
      },
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }

  res.json(posts);
});

router.post(
  "/",
  authenticateToken,
  checkSchema(createPostSchema),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      thumbnailUrl,
      title,
      description,
      content,
      userId,
      tags,
      metaTitle,
      metaDescription,
    } = req.body;

    const slug = processString(title);

    let post;
    try {
      post = await prisma.post.create({
        data: {
          thumbnailUrl,
          title,
          description,
          content,
          userId,
          slug,
          tags,
          metaTitle,
          metaDescription,
        },
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        switch (error.code) {
          case "P2002":
            return res
              .status(400)
              .json({ error: "Title and slug must be unique" });
          case "P2003":
            return res.status(400).json({ error: "User doesn't exist" });
        }
      }
    }
    return res.json({
      message: "Post created successfully",
      post,
    });
  }
);

router.delete("/:id", authenticateToken, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { id } = req.params;

  let post;
  try {
    post = await prisma.post.delete({
      where: {
        id,
      },
    });
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      switch (error.code) {
        case "P2025":
          return res
            .status(404)
            .json({ error: "Record to delete does not exist" });
      }
    }
  }

  return res.json({
    message: "Post deleted successfully",
    post,
  });
});

router.put(
  "/:id",
  authenticateToken,
  checkSchema(editPostSchema),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    let {
      thumbnailUrl,
      title,
      description,
      content,
      userId,
      tags,
      metaTitle,
      metaDescription,
    } = req.body;
    const { id } = req.params;

    const slug = processString(title);

    if (!thumbnailUrl) {
      thumbnailUrl = null;
    }

    let post;
    try {
      post = await prisma.post.update({
        where: {
          id,
        },
        data: {
          thumbnailUrl,
          title,
          description,
          content,
          userId,
          slug,
          tags,
          metaTitle,
          metaDescription,
        },
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        switch (error.code) {
          case "P2025":
            return res
              .status(404)
              .json({ error: "Record to edit does not exist" });
          case "P2003":
            return res.status(400).json({ error: "User doesn't exist" });
        }
      }
    }

    return res.json({
      message: "Post updated successfully",
      post,
    });
  }
);

exports.postsRouter = router;
