declare global {
  interface Window {
    manual_start: boolean;
  }
}

import {getHello} from "./hello.js";

for (let i = 0; i < 1001; i++) {
  console.log(`before Runtime.enable ${i}`);
}

function infinite() {
  while (true) {
    const hello: string = getHello();
    if (hello === "") {
      throw "empty";
    }
  }
}

if (!window || !window.manual_start) {
  infinite();
}

function oneTime() {
  const hello: string = getHello();
  if (hello === "") {
    throw "empty";
  }
}
