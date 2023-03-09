module.exports = {
  type: "object",
  properties: {
    username: {
      type: "string",
      description: "username of user",
      required: true,
      example: "annisa",
    },
    email: {
      type: "string",
      description: "user's email",
      required: true,
      example: "annisa@gmail.com",
    },
    password: {
      type: "string",
      description: "user's password",
      required: true,
    },
  },
};
