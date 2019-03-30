var twilio = require('twilio')

var accountId = 'AC5b2eb44f4dffc6d675392753cc18050a'
var accountToken = '596e6c555df7b123686ff502fe9ed282'

var client = twilio(accountId, accountToken)
var INTERVAL = 10000 // 10 seconds

var count = 0

var call = function() {
  return client.calls.create({
    url: 'https://www.dropbox.com/s/jlypi92e4cv770i/MDH.ogg',//link
    to: '+919823964907',//spammer number
    from: '+12018319808'//twilo number
  }, function (err, res) {
    if (err) return console.error(err)
    count++
    console.log('number ', count, 'status: ', res.status)
  })
}

call()
setInterval(call, INTERVAL)

