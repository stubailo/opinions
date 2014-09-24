Opinions = new Meteor.Collection("opinions");

Opinions.upvoted = function (opinion) {
  if (_.contains(opinion.upvotes, Meteor.userId)) {
    return true;
  }

  return false;
};

Opinions.downvoted = function (opinion) {
  if (_.contains(opinion.downvotes, Meteor.userId)) {
    return true;
  }

  return false;
};

Opinions.numPoints = function (opinion) {
  // don't break when the array doesn't exist
  return (opinion.upvotes || []).length -
    (opinion.downvotes || []).length;
};

Topics = new Meteor.Collection("topics");
