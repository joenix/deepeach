const noop = () => {};

const foreach = (source = {}, callback = noop) => {
  Object.keys(source).map(item => {
    source[item] = compare(callback(source[item], item, source), source[item]);
  });
  return source;
};

const compare = (origin, target) => {
  return origin === undefined ? target : origin;
};

const make = (key, value) => {
  let json = {};
  json[key] = value;
  return json;
};

const check = (value, mode = Object) => {
  return value && value.constructor === mode;
};

const copy = target => ({
  __proto__: Object.getPrototypeOf(target),
  ...target
});

const deepeach = (source = {}, callback = noop, clone = false, root = []) => {
  if (clone) {
    source = copy(source);
  }

  source = foreach(source, (value, key, parent) => {
    const path = [...root, key];
    return check(value)
      ? deepeach(value, callback, clone, path)
      : callback(value, key, path, parent);
  });

  return source;
};

module.exports = deepeach;
