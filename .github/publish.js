const ghpages = require("gh-pages");

function onComplete(err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Angular Lyon successfully deployed! 🚀");
  }
}

ghpages.publish("dist/angular-lyon/browser", { branch: "master" }, onComplete);
