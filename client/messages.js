Messages = {
  TOPIC_NOT_LOGGED_IN: "You must be logged in to create a new topic.",
  OPINION_NOT_LOGGED_IN: "You must be logged in to post an opinion.",
  VOTE_NOT_LOGGED_IN: "You must be logged in to vote on an opinion."
};

Template.registerHelper("messageFor", function (errorCode) {
  return Messages[errorCode];
});