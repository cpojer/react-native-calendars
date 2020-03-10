const areEqual = require('fbjs/lib/areEqual');

function shouldUpdate(a, b, paths) {
  for (let i = 0; i < paths.length; i++) {
    const equals = areEqual(a[paths[i]], b[paths[i]]);
    if (!equals) {
      return true;
    }
  }
  return false;
}

module.exports = {
  shouldUpdate
};
