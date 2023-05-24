const FacebookChannel = require('./facebookChannel')
const errorHandler = require('../common/errorHandler')

FacebookChannel.methods(['get', 'post', 'put', 'delete'])
FacebookChannel.updateOptions({new: false, runValidators: true})
FacebookChannel.after('post', errorHandler).after('put', errorHandler)

module.exports = FacebookChannel