var sentiment = require("sentiment");
var _ = require("lodash");

var bestseats = require("./tweets/bestseats.json");
var besttickets = require("./tweets/besttickets.json");
var floorseats = require("./tweets/floorseats.json");
var fuckticketmaster = require("./tweets/fuckticketmaster.json");
var gafloors = require("./tweets/gafloors.json");
var gapit = require("./tweets/gapit.json");
var orchestra = require("./tweets/orchestra.json");
var pittickets = require("./tweets/pittickets.json");
var ticketbots = require("./tweets/ticketbots.json");

var tweetsArray = [
  bestseats,
  besttickets,
  floorseats,
  fuckticketmaster,
  gafloors,
  gapit,
  orchestra,
  pittickets,
  ticketbots
];

var tweetsScore = tweetsArray.map(tweets => {
  return tweets.reduce((score, tweet) => {
    return sentiment(tweet.tweet).score + score;
  }, 0);
});

const fullArray = _.zip(tweetsScore, tweetsArray);

console.log(tweetsScore);

console.log("");
