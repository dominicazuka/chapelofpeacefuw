const { insertChildrenSongs, getChildrenSongs } = require('../model/childrenSongs.model')

const getChildrenSongsService = async () => {
  try {
  const result = await getChildrenSongs()
    return { data: result, error: false, statusCode: 200, message: 'Success' }
  } catch {
    return { data: [], error: true, statusCode: 500, message: 'Error' }
  }
}

const insertChildrenSongsService = async payload => {
  const result = await insertChildrenSongs(payload)
  return result
}
module.exports = {
  getChildrenSongsService,
  insertChildrenSongsService
}
