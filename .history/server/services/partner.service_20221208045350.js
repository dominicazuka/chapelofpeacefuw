const { insertPartner } = require('../model/partner.model')

const getPartnerService = async () => {
  try {
    return { data: [], error: false, statusCode: 200, message: 'Success' }
  } catch {
    return { data: [], error: true, statusCode: 500, message: 'Error' }
  }
}

const insertPartnerService = async payload => {
  const result = await insertPartner(payload)
  return result
}
module.exports = {
  getPartnerService,
  insertPartnerService
}
