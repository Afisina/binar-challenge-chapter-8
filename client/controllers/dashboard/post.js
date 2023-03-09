const moment = require("moment");
const post = [
  { id: 1, title: "Lorem ipsum", body: "dolor sit amet", createdAt: Date() },
  { id: 2, title: "Lorem ipsum", body: "dolor sit amet", createdAt: Date() },
];
module.exports = {
  index: (req, res) => {
    const locals = {
      data: {
        posts: posts.map((i) => {
          i.fromNow = moment(i.createdAt).fromNow();
          return i;
        }),
      },
      contentName: "Posts",
    };
    res.render("pages/dashboard/post", locals);
  },
};
