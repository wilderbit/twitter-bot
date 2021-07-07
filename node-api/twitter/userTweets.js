const client = require('./client');

async function getUserTweets(userId) {
    const tweetsOfUser = await client.v2.userTimeline(userId, { exclude: 'replies' });
    return tweetsOfUser;
}

module.exports.getUserTweets = getUserTweets;