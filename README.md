# deepeach

code by joenix

```bash
npm i deepeach
# or
yarn add deepeach
```

```js
import deepeach from "deepeach";

let json = {
  name: "joenix",
  classname: "senior",
  mates: {
    name: "snoopy",
    classname: "scientist",
    mates: {
      name: "kitty",
      classname: "idol"
    }
  },
  skills: ["magic", "battleax", "storm"]
};

deepeach(json, (value, key) => {
  console.log(value, key);
});
```
