// Start Wif
var wif = require('wif')

var privateKey = new Buffer('0000000000000000000000000000000000000000000000000000000000000001', 'hex')

var key = wif.encode(128, privateKey, true)
// => KwDiBf89QgGbjEhKnhXJuH7LrciVrZi3qYjgd9M7rFU73sVHnoWn
console.log('key: '+key);
var obj = wif.decode(key)
console.log('wif decoded key'+obj);
// => {
//	version: 128,
//	privateKey: <Buffer 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 01>,
//	compressed: true
//}

a = wif.encode(obj)
console.log('wif encoded obj: '+a);
// => KwDiBf89QgGbjEhKnhXJuH7LrciVrZi3qYjgd9M7rFU73sVHnoWn
// end Wif
