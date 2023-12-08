// import dotenv, { config } from 'dotenv'
// dotenv.config()

// OR

import { config } from 'dotenv'
config()
console.log(config)

// OR
// Imports entire module including default export
// import * as dotenv from 'dotenv'
// dotenv.config()

console.log(process.env.DB_USERNAME)
console.log(process.env.DB_PASSWORD)
console.log(process.env.DB_URL)
