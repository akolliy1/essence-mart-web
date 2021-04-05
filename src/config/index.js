const dotenv = require('dotenv')
const path = require('path')
const Joi = require('@hapi/joi')

dotenv.config({ path: path.join(__dirname, '../../.env') })

const envVarsSchema = Joi.object()
  .keys({
    // backend url
    VUE_APP_API_BASE_URL: Joi.string()
      .required()
      .description('Server base url')
      .required(),
    // frontend url
    VUE_APP_BASE_URL: Joi.string()
      .required()
      .description('Client url')
      .required(),
  })
  .unknown()

const { value: envVars, error } = envVarsSchema
  .prefs({ errors: { label: 'key' } })
  .validate(process.env)

if (error) {
  throw new Error(`Config validation error: ${error.message}`)
}

module.exports = {
  env: envVars.NODE_ENV,
  client: {
    url: envVars.VUE_APP_BASE_URL
  },
  server: {
    url: envVars.VUE_APP_API_BASE_URL
  },
}
