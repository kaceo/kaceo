// Formatting tokens for Luxon: https://moment.github.io/luxon/#/formatting?id=table-of-tokens
// readableDate Filters

//const moment = require("moment");
const { DateTime } = require("luxon");

module.exports =

function readableDate (dateObj, format, zone) {
  return DateTime.fromJSDate(
    dateObj, { zone: zone || "utc" }
  ).toFormat(format || "dd LLLL yyyy");
}

