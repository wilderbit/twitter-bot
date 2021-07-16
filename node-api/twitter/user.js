const client = require('./client');
const User = require('./models/userModel')

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

module.exports = {getUser};