export default function filterComponents(components, fnName) {
  return components.reduce((prev, component) => {
    if (typeof component[fnName] === 'function') {
      return prev.concat(component[fnName]);
    }
    return prev;
  }, []);
}
