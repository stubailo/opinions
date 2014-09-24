var newTopicError = new ReactiveVar(null);

Template.newTopic.events({
  "submit form": function (event) {
    var name = event.target.name.value;
    var tags = event.target.tags.value;

    tags = tags.split(/[, ]+/g);
    tags = _.uniq(tags);

    Meteor.call("createTopic", name, tags, function (error, result) {
      if (error) {
        newTopicError.set(error.error);
      } else {
        // clear form
        event.target.name.value = "";
        event.target.tags.value = "";

        // use result to go to the opinion page
        Router.go("topicPage", {_id: result});
      }
    });

    return false;
  }
});

Template.newTopic.helpers({
  formError: function () {
    return newTopicError.get();
  }
});

Template.topics.helpers({
  topics: function () {
    return Topics.find();
  }
});