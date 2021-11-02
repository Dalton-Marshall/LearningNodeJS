const {createReadStream} = require('fs');

const stream = createReadStream('./content/big.txt', {
    highWaterMark: 90000,
    encoding: 'utf8',
});

// default buffer size 64kb
// last buffer = remainder
// highWaterMark

stream.on('data', (result) => {
    console.log(result);
})

stream.on('error', (err) => {
    console.log(error);
})