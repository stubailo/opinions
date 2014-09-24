var newOpinionError = new ReactiveVar(null);

Template.newOpinion.events({
  "submit form": function (event) {
    var content = event.target.content.value;

    Meteor.call("createOpinion", content, this.topicId, function (error, result) {
      if (error) {
        newOpinionError.set(error.error);
      } else {
        // clear form
        event.target.content.value = "";

        // close form
      }
    });

    return false;
  }
});

Template.newOpinion.helpers({
  formError: function () {
    return newOpinionError.get();
  }
});

Template.opinions.helpers({
  opinions: function (topicId) {
    return Opinions.find({topicId: topicId});
  }
});