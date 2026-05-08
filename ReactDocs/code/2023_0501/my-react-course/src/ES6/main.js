// 使用 node 執行時 package.json 須加上 "type": "module" 才能使用 import 功能

import m, {PI, circleAreaFun} from './math.js';

console.log(m.square(12)); // 144

console.log(PI); // 3.1415

console.log(circleAreaFun(10)); // 314.1592653589793
