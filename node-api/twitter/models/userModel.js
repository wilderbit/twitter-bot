const mongoose = require('mongoose');

const { Schema } = mongoose;


const userModel = new Schema({
    data: {
        id: String,
        entities: {
            description: {
                mentions: {
                    type: [
                        {
                            start: Number,
                            end: Number,
                            username: String
                        }
                    ],
                    default: []
                }
            }
        },
        username: String,
        description: {type: String, default: ''},
        name: String,
        verified: {type: Boolean, default: false},
        profile_image_url: String,
        location: {type: String, default: ''},
        public_metrics: {
            followers_count: Number,
            following_count: Number,
            tweet_count: Number,
            listed_count: Number
        }
    }
});

module.exports = mongoose.model('User', userModel);