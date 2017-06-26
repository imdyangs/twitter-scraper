var json2csv = require("json2csv");
var fs = require("fs");
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
var frontrow = require("./tweets/frontrow.json");

var tweetsArray = [
  bestseats,
  besttickets,
  floorseats,
  fuckticketmaster,
  gafloors,
  gapit,
  orchestra,
  pittickets,
  ticketbots,
  frontrow
];

var tweetsArrayName = [
  "bestseats",
  "besttickets",
  "floorseats",
  "fuckticketmaster",
  "gafloors",
  "gapit",
  "orchestra",
  "pittickets",
  "ticketbots",
  "frontrow"
];

_.zip(tweetsArrayName, tweetsArray).map(tweets => {
  json2csv(
    { data: tweets[1], fields: ["tweet", "user_screenname", "tweet_url"] },
    function(err, csv) {
      if (err) console.log(err);
      fs.writeFile(`${tweets[0]}.csv`, csv, function(err) {
        if (err) throw err;
        console.log("file saved");
      });
    }
  );
});
