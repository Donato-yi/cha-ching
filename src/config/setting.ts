import { equals } from 'ramda'

const SERVER_ENV = 'development' // SERVER_ENV = 'production', 'staging', 'development'
const configurations = {
  production: {},
  staging: {},
  development: {},
}

const setting = {
  ...configurations[SERVER_ENV],
}

export default setting
