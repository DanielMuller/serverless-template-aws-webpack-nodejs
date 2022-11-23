'use strict'

import { LambdaLog } from 'lambda-log'

export const handler = async (event) => {
  const logger = new LambdaLog({
    tags: ['hello'],
    dev: true
  })
  logger.info('Event', { event })

  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless v1.26! Your Hello function executed successfully!',
      input: event
    })
  }

  return response

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
}
