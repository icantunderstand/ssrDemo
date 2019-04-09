"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = filterComponents;

function filterComponents(components, fnName) {
  return components.reduce((prev, component) => {
    if (typeof component[fnName] === 'function') {
      return prev.concat(component[fnName]);
    }

    return prev;
  }, []);
}