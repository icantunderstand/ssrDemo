const fs = require('fs');
const loaderUtil = require('loader-utils');

module.exports = function libLoader(source) {
  const options = loaderUtil.getOptions(this);
  console.log(options);
  console.log(this.resourcePath);
  fs.writeFileSync('./lib', source);
  return source;
};
