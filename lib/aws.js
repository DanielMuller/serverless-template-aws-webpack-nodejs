'use strict'
const AWS = require('aws-sdk')

module.exports.getAccountId = async (e) => {
  // Checking AWS user details
  const profile = e.service.provider.profile
  const credentials = new AWS.SharedIniFileCredentials({ profile: profile })
  AWS.config.credentials = credentials
  const sts = new AWS.STS()
  const { Account } = await sts.getCallerIdentity().promise()
  return Account
}
