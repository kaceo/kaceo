const axios = require('axios')

const apientry = 'https://collectednotes.com/jenaro.json'

module.exports = async () => {
  const result = await axios.get(apientry)
  return {
    posts: result.data.notes
  }
}
