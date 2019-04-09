/* eslint consistent-return:0 */
const fs = require('fs');
const path = require('path');
const mkdirp = require('mkdirp');


function convertFilePath(file, basedir) {
  const ext = path.extname(file);
  let libfile = basedir + file.slice(basedir.length).replace('/src/', '/lib/');
  if (ext === '' || (ext !== '.js' && ext !== '.json')) {
    libfile += '.js';
  }
  return libfile;
}

module.exports = function libLoader(source) {
  const baseDir = this.rootContext;
  let filePath;
  this.cacheable();
  // 是否是异步loader
  const callback = this.async();
  if (!callback) {
    if (this.resourcePath.split(path.sep).indexOf('node_modules') !== -1) {
      return source;
    }
    filePath = convertFilePath(this.resourcePath, baseDir);
  }

  if (this.resourcePath.split(path.sep).indexOf('node_modules') !== -1) {
    process.nextTick(() => callback(null, source));
    return;
  }
  filePath = convertFilePath(this.resourcePath, baseDir);
  if (filePath === this.resourcePath || filePath === `${this.resourcePath}.js`) {
    process.nextTick(() => callback(null, source));
    return;
  }
  mkdirp(path.dirname(filePath), (err) => {
    if (err) {
      callback(err);
      return;
    }
    fs.writeFile(filePath, source, fserr => callback(fserr, source));
  });
};
