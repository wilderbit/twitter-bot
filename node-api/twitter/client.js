const secrets = require('../secrets.json');
const { TwitterApi } = require('twitter-api-v2');

const twitterClient = new TwitterApi({
   appKey: secrets.appKey,
   appSecret: secrets.appSecret,
   accessToken: secrets.accessToken,
   accessSecret: secrets.accessSecret,
});


module.exports = twitterClient;