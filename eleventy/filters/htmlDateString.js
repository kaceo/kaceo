
// dateObj input: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
//const moment = require("moment");
const { DateTime } = require("luxon");


module.exports =

function htmlDateString(dateObj) {
  return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat('yyyy-LL-dd');
}
