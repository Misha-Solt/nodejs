const { myName, myHobbies, myFavoriteNum } = require('./mult-exports')
const {
    myFriendsName,
    myName: myOtherName,
    myGreatHobbies,
} = require('./export-and-import')
const greeting = require('./myModules/single-export')

// Imports from mult-exports.js
console.log(myFavoriteNum)
console.log(myHobbies)
console.log(myName)

myHobbies.push('climbing')

// Imports from single-export.js
greeting(myName)

// Imports from export-and-import.js
console.log(myOtherName)
console.log(myFriendsName)
console.log(myGreatHobbies)
