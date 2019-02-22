const crypto = require('crypto');

function MD5 (text) {
  return crypto.createHash('md5').update(text).digest('hex');
};

function array2Tree(arr){
  const data = JSON.parse(JSON.stringify(arr));
  const temp = {};
  data.forEach(item=>temp[item._id] = item);
  data.forEach(item=>{
    if(item.parent){
      !temp[item.parent].children && ( temp[item.parent].children = [] );
      temp[item.parent].children.push(item)
    }
  })
  return Object.values(temp).filter(item=>!item.parent)
}

module.exports = {
    MD5,
    array2Tree
}