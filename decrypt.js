// start decrypt
var bip38 = require('bip38')
var wif = require('wif')

var encryptedKey = '6PRVWUbkzzsbcVac2qwfssoUJAN1Xhrg6bNk8J7Nzm5H7kxEbn2Nh2ZoGg'
var decryptedKey = bip38.decrypt(encryptedKey, 'TestingOneTwoThree', function (status) {
  console.log(status.percent) // will print the precent every time current increases by 1000
})

console.log(wif.encode(0x80, decryptedKey.privateKey, decryptedKey.compressed))
// => '5KN7MzqK5wt2TP1fQCYyHBtDrXdJuXbUzm4A9rKAteGu3Qi5CVR'

// End decrypt
