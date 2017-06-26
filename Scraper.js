var Twit = require("twit");
var config = require("./config/config");
var jsonfile = require("jsonfile");

var T = new Twit(config);

console.log("Start Scrape \n");

gotData = async (err, data, res) => {
  var returnArray = [];
  let user_screen;
  await data.statuses.map(async status => {
    let url = "http://twitter.com/" + status.user_screen + "/status/" + status.id_str;
    returnArray.push({
      tweet: status.text,
      user_id: status.user.id,
      user_screenname: status.user.screen_name,
      tweet_url: url,
      id_str: status.id_str,
      tweet_id: status.id
    });
  });
  console.log(returnArray);
  jsonfile.spaces = 2;
  jsonfile.writeFileSync('frontrow', returnArray)
};

runScrape = async () => {
  await T.get(
    "search/tweets",
    {
      q: "front row",
      count: 50
    },
    gotData
  );
};

runScrape();
