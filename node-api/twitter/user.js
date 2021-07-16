const client = require('./client');
const User = require('./models/userModel')
const Tweet = require('./models/tweetModel')

async function getUser(name) {
    let user =  await client.v2.userByUsername(name, {
        'user.fields': [
            'profile_image_url',
            'public_metrics',
            "description",
            "username",
            "entities",
            "name",
            "verified",
            "withheld",
            "location",
            "created_at"
        ],
    });

    let userModel = new User(user);
    await userModel.save();
    return(user);
}

async function getUserTweets(userId) {
    let tweets = await client.v2.userTimeline(userId, {
        "tweet.fields": [
            "attachments",
            "author_id",
            "context_annotations",
            "conversation_id",
            "created_at",
            "entities",
            "in_reply_to_user_id",
            "lang",
            "possibly_sensitive",
            "referenced_tweets",
            "public_metrics",
            "reply_settings",
            "source",
            "text",
        ],
        "media.fields": [
            "duration_ms",
            "height",
            "media_key",
            "preview_image_url",
            "type",
            "url",
            "width",
            "public_metrics"
        ],
        "expansions": [
            "attachments.poll_ids",
            "attachments.media_keys",
            "author_id",
            "entities.mentions.username",
            "in_reply_to_user_id",
            "referenced_tweets.id",
            "referenced_tweets.id.author_id"
        ]
    });

    tweets._realData.data.map(tweet => {
        let t = new Tweet(tweet);
        t.save()
    });

    return tweets;
}

module.exports = {getUser, getUserTweets};