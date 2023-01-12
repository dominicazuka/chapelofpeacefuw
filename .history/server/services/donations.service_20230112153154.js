const { insertDonations, getDonations } = require('../model/donations.model')

const getDonationsService = async () => {
  try {
  const result = await getDonations()
    return { data: result, error: false, statusCode: 200, message: 'Success' }
  } catch {
    return { data: [], error: true, statusCode: 500, message: 'Error' }
  }
}

const insertDonationsService = async payload => {
  const result = await insertDonations(payload)
  return result
}
module.exports = {
  getDonationsService,
  insertDonationsService
}
