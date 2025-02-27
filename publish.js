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

ghpages.publish("./book", {
  // 在 GitHub Actions 中使用 GITHUB_TOKEN
  repo: process.env.GITHUB_TOKEN ? 
    `https://x-access-token:${process.env.GITHUB_TOKEN}@github.com/${process.env.GITHUB_REPOSITORY}.git` :
    undefined,
  user: {
    name: 'github-actions[bot]',
    email: 'github-actions[bot]@users.noreply.github.com'
  }
}, function (err) {
  if (err) {
    console.log("publish failed");
    console.log(err);
    process.exit(1);
  } else {
    console.log("publish success");
  }
});
