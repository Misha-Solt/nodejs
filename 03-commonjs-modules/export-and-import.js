const { myName, myHobbies } = require('./mult-exports')

const myFriendsName = 'Oksana'

module.exports.myName = myName
module.exports.myFriendsName = myFriendsName
module.exports.myGreatHobbies = myHobbies
