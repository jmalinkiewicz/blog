require("dotenv").config();

const jwt = require("jsonwebtoken");
const express = require("express");
const { PrismaClient } = require("@prisma/client");
const { comparePasswords, getUniqueUserId } = require("../helpers");
const { checkSchema, validationResult } = require("express-validator");
const { loginSchema } = require("../schemas");

const prisma = new PrismaClient();
const router = express.Router();

router.post("/", checkSchema(loginSchema), async (req, res) => {
  // Validate the request body, if inputs are empty, return an error
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log(errors);
    return res.status(400).json({ errors: errors.array() });
  }

  // Retrieve the password from the request body
  const { password } = req.body;

  // Find the user with the provided username
  const user = await getUniqueUserId(req, res);

  if (!user) {
    return res.status(401).json({ error: "Invalid credentials" });
  }

  // Compare the provided password with the hashed password in the database
  const match = await comparePasswords(password, user.password);

  if (!match) {
    return res.status(401).json({ error: "Invalid credentials" });
  }

  // If match, generate a JWT token and send it to the client

  const token = jwt.sign({ userId: user.id }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "4h",
  });

  res
    .cookie("token", token, {
      httpOnly: true,
      path: "/",
      secure: true,
      expires: new Date(new Date().getTime() + 4 * 3600000),
    })
    .json({ message: "Logged in" });
});

exports.loginRouter = router;
