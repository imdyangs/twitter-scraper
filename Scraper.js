var Twit = require("twit");
var config = require("./config");
var search = require("./search")

var T = new Twit(config);

console.log("Start Scrape \n");

gotData = (err, data, res) => {
  data.statuses.map(status => {
    console.log(status.text);
    console.log("tweet id: " + status.id + '\n');
  });
};

T.get("search/tweets", search, gotData);
