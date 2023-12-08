// console.log(module)
//Error: module is not defined in ES module scope

import { temperature, season } from './named-exports.mjs'
import { isRaining, humidity } from './inline-exports.mjs'
import getDatafromServer from './default-export.mjs'
import DEFAULT_SERVER, {
    USERNAME as MY_USERNAME,
    PASSWORD as MY_PASSWORD,
} from './mixed-exports.mjs'

console.log(season)
console.log(temperature)

console.log(humidity)
console.log(isRaining)

getDatafromServer('https://jsonplaceholder.typicode.com/posts/1')
    .then((post) => console.log(post))
    .catch((err) => console.err(err))

console.log(DEFAULT_SERVER)
console.log(MY_USERNAME, MY_PASSWORD)
