declare global {
  interface Window {
    sayHello: () => void;
  }
}

import {getHello} from "./hello.js";

if (window) {
  window.sayHello = function() {
    const hello: string = getHello();
    console.log(hello);
  };
}
