const crypto = require("crypto");
const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;

function MD5(text) {
  return crypto
    .createHash("md5")
    .update(text)
    .digest("hex");
}

function array2Tree(arr) {
  const data = JSON.parse(JSON.stringify(arr));
  const temp = {};
  data.forEach(item => (temp[item._id] = item));
  data.forEach(item => {
    if (item.parent && item.parent !== item._id && temp[item.parent]) {
      !temp[item.parent].children && (temp[item.parent].children = []);
      temp[item.parent].children.push(item);
    } else if (item.parent === item._id || !temp[item.parent]) {
      item.parent = null;
    }
  });
  return Object.values(temp).filter(item => !item.parent);
}

function getChildArray(arr, id) {
  const data = JSON.parse(JSON.stringify(arr));
  const result = [new ObjectId(id)];
  data.forEach(item => {
    if (item.parent && item.parent === id) {
      const single = getChildArray(data, item._id);
      result.push(...single);
    }
  });
  return result;
}

function generateSecurePathHash(url, expires, secret) {
  if (!expires || !secret) {
    return url;
  }
  const expired = Math.ceil(Date.now() / 1000) + expires;
  const input = expired + url + " " + secret;
  const binaryHash = crypto
    .createHash("md5")
    .update(input)
    .digest();
  const base64Value = new Buffer(binaryHash).toString("base64");
  const token = base64Value
    .replace(/=/g, "")
    .replace(/\+/g, "-")
    .replace(/\//g, "_");
  return `${url}?token=${token}&expires=${expired}`;
}

module.exports = {
  MD5,
  array2Tree,
  getChildArray,
  generateSecurePathHash
};
