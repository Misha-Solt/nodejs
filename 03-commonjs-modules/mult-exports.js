const myName = 'Misha'
const myHobbies = ['running', 'swimming', 'cycling']
const myFavoriteNum = 87

console.log('Hi from multi-exports;)')

exports.myName = myName
module.exports.myFavoriteNum = myFavoriteNum
module.exports.myHobbies = myHobbies
