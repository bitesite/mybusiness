process.env.NODE_ENV = process.env.NODE_ENV || 'production'

const environment = require('./environment')

const Dotenv = require('dotenv-webpack')

environment.plugins.prepend('Environment', new Dotenv(
{
  systemvars: true
}))

module.exports = environment.toWebpackConfig()
