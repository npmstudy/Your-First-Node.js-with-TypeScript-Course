var ghpages = require("gh-pages");
var fs = require("fs");
console.log("publish now");

var files = fs.readdirSync("./book");
console.log(files);

if (fs.existsSync("./node_modules/.cache/gh-pages")) {
  console.log("node_modules/.cache/gh-pages exists");
  fs.rmSync("./node_modules/.cache/gh-pages", { recursive: true });
} else {
  console.log("node_modules/.cache/gh-pages not exists");
}

ghpages.publish("./book", function (err) {
  if (err) {
    console.log("publish failed");
    console.log(err);
  } else {
    console.log("publish success");
  }
});
