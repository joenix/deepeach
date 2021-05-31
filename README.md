# deepeach

A simple package for recursion of object.

## install

```sh
npm i deepeach
# or
yarn add deepeach
```

## how to use ?

```js
import deepeach from "deepeach";

let mock = {
  name: "joenix",
  step: 1,
  children: {
    name: "snoopy",
    step: 2,
    children: {
      name: "kitty",
      step: 3
    }
  },
  skills: ["magic", "battleax", "storm"]
};

let result = deepeach(mock, (value, key) => {
  console.log(`${key}: ${value}`);
});

console.log(result);
```
