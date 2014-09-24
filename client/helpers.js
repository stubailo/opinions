Template.registerHelper("calendarize", function (date) {
  return moment(date).calendar();
});

/**
 * @summary Return the plural or singular form of the word depending on the
 * count.
 * @param  {String} word       The word to pluralize.
 * @param  {Integer} count      The number of items. 1 or -1 will result in a
 * singular word, any other count will result in a plural word.
 * @param  {String} [options.pluralWord] The plural version
 * of `word`, in case the plural version isn't just word + "s".
 */
Template.registerHelper("pluralize", function (word, count, options) {
  if (count === 1 || count === -1) {
    return word;
  }

  return options.pluralWord || word + "s";
});
