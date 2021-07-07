const { TwitterApi } = require('twitter-api-v2');
const secrets = require('./secrets.json')


console.log(secrets)

const twitterClient = new TwitterApi({
   appKey: secrets.appKey,
   appSecret: secrets.appSecret,
   accessToken: secrets.accessToken,
   accessSecret: secrets.accessSecret,
});


async function getUser() {
    //const user = await twitterClient.v2.userByUsername('naval');
    //console.log(user)
    //const followers = await twitterClient.v2.followers(user.data.id);
    //console.log(followers);

    await twitterClient.v1.tweet('Hello, this is a test. \n @wilderbit');

    // await twitterClient.v1.uploadMedia(await fs.promises.readFile(path), { type: 'jpg' })
}

getUser();
