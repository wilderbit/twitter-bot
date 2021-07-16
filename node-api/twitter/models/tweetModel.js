const mongoose = require('mongoose');

const { Schema } = mongoose;


const tweetModel = new Schema({
    "entities": {
        "mentions": {
            "type": [
                {
                    "start": Number,
                    "end": Number,
                    "username": String,
                    "id": String
                }
            ],
            default: []
        }
    },
    "author_id": String,
    "context_annotations":{
        type: [
            {
                domain: {
                    "id": String,
                    "name": String,
                    "description": String
                },
                entity: {
                    "id": String,
                    "name": String
                }
            }
        ],
        default: []
    },
    "public_metrics": {
        "retweet_count": Number,
        "reply_count": Number,
        "like_count": Number,
        "quote_count": Number
    },
    "created_at": String,
    "source": {type: String, default: ""},
    "text": String,
    "conversation_id": {type: String, default: ""},
    "id": String,
    "lang": {type: String, default: ""},
    "referenced_tweets": {
        type: [
            {
                "type": {type: String},
                "id": String
            }
        ],
        default: []
    },
    "reply_settings": {type: String, default: ""},
    "possibly_sensitive": {type: Boolean, default: false}
});

module.exports = mongoose.model('Tweets', tweetModel);