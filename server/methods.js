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
      content: content,
      topicId: topicId
    });
  }
});