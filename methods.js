Meteor.methods({
  createTopic: function (name, tags) {
    check(name, String);
    check(tags, [String]);

    if (! this.userId) {
      throw new Meteor.Error("TOPIC_NOT_LOGGED_IN");
    }

    return Topics.insert({
      createdAt: new Date(),
      createdBy: this.userId,
      createdByUsername: Meteor.user().username,
      name: name,
      tags: tags
    });
  },
  createOpinion: function (content, topicId) {
    check(content, String);

    if (! this.userId) {
      throw new Meteor.Error("OPINION_NOT_LOGGED_IN");
    }

    return Opinions.insert({
      createdAt: new Date(),
      createdBy: this.userId,
      createdByUsername: Meteor.user().username,
      content: content,
      topicId: topicId
    });
  },
  upvoteOpinion: function (opinionId) {
    check(opinionId, String);

    if (! this.userId) {
      throw new Meteor.Error("VOTE_NOT_LOGGED_IN");
    }

    Opinions.update({
      _id: opinionId,
      downvotes: {$ne: this.userId} // don't allow upvoting and downvoting
    }, {
      $addToSet: {upvotes: this.userId}
    });
  }
});