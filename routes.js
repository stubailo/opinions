Router.configure({
  layoutTemplate: "layout"
});

Router.map(function () {
  this.route("home", {path: "/"});
  this.route("topicPage", {
    path: "/topic/:_id",
    data: function () {
      return Topics.findOne(this.params._id);
    }
  });
});