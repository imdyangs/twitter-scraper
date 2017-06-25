var Twit = require("twit");
var config = require("./config/config");
var jsonfile = require("jsonfile");

var T = new Twit(config);

console.log("Start Scrape \n");

gotData = async (err, data, res) => {
  var returnArray = [];
  var user_screen;
  data.statuses.map(async (status) => {
    console.log(status.user.id)
    await T.get(
      "users/show",
      {
        user_id: status.user.id
      },
      (err, data, res) => {
        console.log(data.screen_name);
        user_screen=data.screen_name;
      }
    );
    const url = 
    returnArray.push({
      tweet: status.text,
      user_id: status.user.id,
      user_screenname: user_screen,
      id_str: status.id_str,
      tweet_id: status.id
      tweet_url: 
    });
  });
  jsonfile.spaces = 2;
  jsonfile.writeFileSync("./scraped/orchestra.json", returnArray);
};

runScrape = async () => {
  await T.get(
    "search/tweets",
    {
      q: "orchestra seats",
      count: 3
    },
    gotData
  );
  console.log("yay");
};

runScrape();
