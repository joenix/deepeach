const foreach = (source = {}, callback = () => {}) => {
  Object.keys(source).map(item => {
    callback(source[item], item);
  });
};

const make = (key, value) => {
  let json = {};
  json[key] = value;
  return json;
};

const check = (value, mode = Object) => {
  return value && value.constructor === mode;
};

const deepeach = (source = {}, callback = () => {}, deep = false) => {
  if (deep) {
    source = JSON.parse(JSON.stringify(source));
  }

  foreach(source, (value, key) =>
    check(value)
      ? deepeach(value, callback, deep)
      : callback(value, key)
  );
};

export default deepeach;
