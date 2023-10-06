import {getHello} from "./hello.js";

setTimeout(() => {
  const hello: string = getHello();
  console.log('main.ts: ' + hello);
}, 70); // Adjust this value to try to get this to execute between DevTools sending removeBreakpoint & setBreakpointByUrl
