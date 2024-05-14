const loginSchema = {
  username: {
    trim: true,
    isString: true,
    notEmpty: true,
    errorMessage: "Username can't be empty",
  },
  password: {
    trim: true,
    isString: true,
    notEmpty: true,
    errorMessage: "Password can't be empty",
  },
};

const createPostSchema = {
  title: {
    trim: true,
    isString: true,
    notEmpty: true,
    errorMessage: "Title can't be empty",
  },
  content: {
    isString: true,
    notEmpty: true,
    errorMessage: "Content can't be empty",
  },
};

const editPostSchema = {
  query: {
    trim: true,
    notEmpty: true,
  },
  title: {
    isString: true,
    notEmpty: false,
    errorMessage: "Title must be a string",
  },
  content: {
    isString: true,
    notEmpty: false,
    errorMessage: "Content must be a string",
  },
};

module.exports = { loginSchema, createPostSchema, editPostSchema };
