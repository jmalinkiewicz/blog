const allowedTags = [
  "showsMovies",
  "gaming",
  "tech",
  "books",
  "food",
  "life",
  "travel",
]; // Add more tags as needed

const loginSchema = {
  username: {
    trim: true,
    isString: { errorMessage: "Username must be a string" },
    notEmpty: { errorMessage: "Username can't be empty" },
  },
  password: {
    trim: true,
    isString: { errorMessage: "Password must be a string" },
    notEmpty: { errorMessage: "Password can't be empty" },
  },
};

const createPostSchema = {
  thumbnailUrl: {
    optional: true,
    isString: { errorMessage: "ThumbnailUrl must be a string" },
    isURL: { errorMessage: "ThumbnailUrl must be a url" },
  },
  title: {
    escape: true,
    trim: true,
    isString: { errorMessage: "Title must be a string" },
    notEmpty: { errorMessage: "Title can't be empty" },
  },
  description: {
    escape: true,
    trim: true,
    isString: { errorMessage: "Description must be a string" },
    notEmpty: { errorMessage: "Description can't be empty" },
  },
  content: {
    escape: true,
    isString: { errorMessage: "Content must be a string" },
    notEmpty: { errorMessage: "Content can't be empty" },
  },
  tags: {
    isArray: {
      options: {
        min: 1,
      },
    },
    custom: {
      options: (tags) => {
        const uniqueTags = [...new Set(tags)];
        return (
          uniqueTags.length === tags.length &&
          uniqueTags.every((tag) => allowedTags.includes(tag))
        );
      },
      errorMessage:
        "One or more tags are not valid. Please use only predefined tags and do not use the same tag twice.",
    },
  },
  metaTitle: {
    escape: true,
    trim: true,
    isString: { errorMessage: "Meta title must be a string" },
    notEmpty: { errorMessage: "Meta title can't be empty" },
  },
  metaDescription: {
    escape: true,
    trim: true,
    isString: { errorMessage: "Meta description must be a string" },
    notEmpty: { errorMessage: "Meta description can't be empty" },
  },
};

const editPostSchema = {
  thumbnailUrl: {
    optional: true,
    isString: { errorMessage: "ThumbnailUrl must be a string" },
    isURL: { errorMessage: "ThumbnailUrl must be a url" },
    errorMessage: "ThumbnailUrl must be a url",
  },
  title: {
    escape: true,
    isString: { errorMessage: "Title must be a string" },
    notEmpty: { errorMessage: "Title can't be empty" },
  },
  description: {
    escape: true,
    trim: true,
    isString: { errorMessage: "Description must be a string" },
    notEmpty: { errorMessage: "Description can't be empty" },
  },
  content: {
    escape: true,
    isString: { errorMessage: "Content must be a string" },
    notEmpty: { errorMessage: "Content can't be empty" },
  },
  tags: {
    isArray: {
      options: {
        min: 1,
      },
    },
    custom: {
      options: (tags) => {
        const uniqueTags = [...new Set(tags)];
        return (
          uniqueTags.length === tags.length &&
          uniqueTags.every((tag) => allowedTags.includes(tag))
        );
      },
      errorMessage:
        "One or more tags are not valid. Please use only predefined tags and do not use the same tag twice.",
    },
  },
  metaTitle: {
    escape: true,
    trim: true,
    isString: { errorMessage: "Meta title must be a string" },
    notEmpty: { errorMessage: "Meta title can't be empty" },
  },
  metaDescription: {
    escape: true,
    trim: true,
    isString: { errorMessage: "Meta description must be a string" },
    notEmpty: { errorMessage: "Meta description can't be empty" },
  },
};

module.exports = { loginSchema, createPostSchema, editPostSchema };
