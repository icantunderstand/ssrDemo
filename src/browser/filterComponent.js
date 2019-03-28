export default function filterComponents(components, fnName) {
  return components.reduce((prev, component) => {
    if (typeof component[fnName] === 'function') {
      return prev.concat(component);
    }
    if (Array.isArray(component)) {
      /* eslint no-shadow:0 */
      return prev.concat(
        component.filter((component) => typeof component[fnName] === 'function')
      );
    }
    if (Object.prototype.toString.call(component) === '[object Object]') {
      return prev.concat(Object.keys(component)
        .filter((key) => typeof component[key][fnName] === 'function')
        .map((key) => component[key]));
    }
    return prev;
  }, []);
}
