var canned = require('canned')
,   http = require('http')
,   opts = { cors: true, logger: process.stdout }

can = canned('.', opts)

http.createServer(can).listen(process.env.PORT || 4567)
