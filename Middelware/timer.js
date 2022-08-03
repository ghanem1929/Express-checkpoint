const path = require("path");
const date = new Date();
const day = date.getDay();
const hour = date.getHours();
const timer = (req, res, next) => {
  if (day > 0 && day < 6 && hour > 9 && hour < 19) {
    next();
  } else {
    res.status(400);
    res.send("err");
  }
};
module.exports = timer;
