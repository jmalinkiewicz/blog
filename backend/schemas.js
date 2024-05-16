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
  content: {
    escape: true,
    isString: { errorMessage: "Content must be a string" },
    notEmpty: { errorMessage: "Content can't be empty" },
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
  content: {
    escape: true,
    isString: { errorMessage: "Content must be a string" },
    notEmpty: { errorMessage: "Content can't be empty" },
  },
};

module.exports = { loginSchema, createPostSchema, editPostSchema };
