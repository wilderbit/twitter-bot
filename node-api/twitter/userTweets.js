const client = require('./client');

async function getUserTweets(userId) {
    return await client.v2.userTimeline(userId, {exclude: 'replies'});
}

module.exports.getUserTweets = getUserTweets;