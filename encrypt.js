


// start encrypt
var bip38 = require('bip38')
var wif = require('wif')

var myWifString = '5KN7MzqK5wt2TP1fQCYyHBtDrXdJuXbUzm4A9rKAteGu3Qi5CVR'
var decoded = wif.decode(myWifString)

var encryptedKey = bip38.encrypt(decoded.privateKey, decoded.compressed, 'TestingOneTwoThree')
// console.log(encryptedKey)
// => '6PRVWUbkzzsbcVac2qwfssoUJAN1Xhrg6bNk8J7Nzm5H7kxEbn2Nh2ZoGg'
//  end Ecrypt
