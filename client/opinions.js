var newOpinionError = new ReactiveVar(null);

Template.newOpinion.events({
  "submit form": function (event) {
    var content = event.target.content.value;

    Meteor.call("createOpinion", content, this.topicId, function (error) {
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

Template.pointsWidget.events({
  "click button": function (event) {
    // need to use current target to avoid getting the icon itself instead of
    // the button
    var action = event.currentTarget.dataset.action;

    if (action === "upvote") {
      Meteor.call("upvoteOpinion", this._id);
    } else if (action === "downvote") {
      Meteor.call("downvoteOpinion", this._id);
    }
  }
});

Template.pointsWidget.helpers({
  upvoted: function () {
    return Opinions.upvoted(this);
  },
  downvoted: function () {
    return Opinions.downvoted(this);
  },
  numPoints: function () {
    return Opinions.numPoints(this);
  }
});