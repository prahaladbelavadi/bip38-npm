// // Start Wif
// var wif = require('wif')
//
// var privateKey = new Buffer('0000000000000000000000000000000000000000000000000000000000000001', 'hex')
//
// var key = wif.encode(128, privateKey, true)
// // => KwDiBf89QgGbjEhKnhXJuH7LrciVrZi3qYjgd9M7rFU73sVHnoWn
// // console.log(key);
// var obj = wif.decode(key)
// // console.log(obj);
// // => {
// //	version: 128,
// //	privateKey: <Buffer 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 01>,
// //	compressed: true
// //}
//
// a = wif.encode(obj)
// // console.log(a);
// // => KwDiBf89QgGbjEhKnhXJuH7LrciVrZi3qYjgd9M7rFU73sVHnoWn
// // end Wif
//
//
//
// // start encrypt
// var bip38 = require('bip38')
// var wif = require('wif')
//
// var myWifString = '5KN7MzqK5wt2TP1fQCYyHBtDrXdJuXbUzm4A9rKAteGu3Qi5CVR'
// var decoded = wif.decode(myWifString)
//
// var encryptedKey = bip38.encrypt(decoded.privateKey, decoded.compressed, 'TestingOneTwoThree')
// // console.log(encryptedKey)
// // => '6PRVWUbkzzsbcVac2qwfssoUJAN1Xhrg6bNk8J7Nzm5H7kxEbn2Nh2ZoGg'
// //  end Ecrypt
//


// start decrypt
var Bip38 = require('bip38');
var encryptedKey = '6PRVWUbkzzsbcVac2qwfssoUJAN1Xhrg6bNk8J7Nzm5H7kxEbn2Nh2ZoGg';

var bip38 = new Bip38();
var privateKeyWif = bip38.decrypt(encryptedKey, 'TestingOneTwoThree');
console.log(privateKeyWif); // =>  '5KN7MzqK5wt2TP1fQCYyHBtDrXdJuXbUzm4A9rKAteGu3Qi5CVR'
// End decrypt
