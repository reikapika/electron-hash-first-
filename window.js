// Run this function after the page has loaded
$(function () {

  const crypto = require('crypto') // https://nodejs.org/api/crypto.html
  const hashing= ['md5', 'sha1', 'sha256', 'sha512'];

  $('#text-input').bind('input propertychange', function (event) {
    console.log(this, this.value)
    let text = this.value;

    hashing.forEach(function (hashAlgorithm){
      runMyHash(hashAlgorithm,text)
    });
  });

  // Focus input box
  $('#text-input').focus()

  function runMyHash(hashName, textIWantToHash){
    // console.log(hashName);
    let start = performance.now()
    console.log(crypto);
    var something = crypto.createHash(hashName).update(textIWantToHash, 'utf8').digest('hex')

    $(`#${hashName}-output`).text(something)
    $(`#time-${hashName}`).text(`The total time is ${performance.now() - start} milliseconds`);
  }
});
