// Return all the tags used in a collection

// iterate over collection
// extract all the unique tags

module.exports =

function getAllTags(collection) {
  let tagSet = new Set();
  for(let item of collection) {
    (item.data.tags || []).forEach(tag => tagSet.add(tag));
  }
  return Array.from(tagSet);
}
