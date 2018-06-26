import { equals } from 'ramda'

const SERVER_ENV = 'staging' // SERVER_ENV = 'production', 'staging', 'development'
const configurations = {
  production: {},
  staging: {
    baseURL: 'http://18.219.115.82/',
  },
  development: {
    baseURL: 'localhost:3000',
  },
}

const setting = {
  ...configurations[SERVER_ENV],
}

export default setting
