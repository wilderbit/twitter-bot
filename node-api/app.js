const express = require('express');
const twitterClient = require('./twitter/client');

const app = express();

app.route('/new-user/:username').get( async (req, res) => {
    const user = await twitterClient.v2.userByUsername(req.params.username)
    res.json(user)
});

async function getUser() {
    //const user = await twitterClient.v2.userByUsername('naval');
    //console.log(user)
    //const followers = await twitterClient.v2.followers(user.data.id);
    //console.log(followers);

    await twitterClient.v1.tweet('Hello, this is a test. \n @wilderbit');

    // await twitterClient.v1.uploadMedia(await fs.promises.readFile(path), { type: 'jpg' })
}

//getUser();

app.listen(4000, () => {
   console.log('Server Started');
});
