console.log("---------------陣列解構---------------");

const point = [1,2,3,4,5];
console.log(point[3]);

const [x,y, ...rest] = point;
console.log('x:',x);
console.log('y:',y);
console.log('rest:', rest);

console.log("---------------物件解構---------------");
const pointObj = {a:1, b:2, c:3  };
const {a,b,c} = pointObj;
console.log(`${a}_${b}_${c}`);

console.log("---------------字串模板 ---------------");
// 字串模板 (使用頓號 ` `)
// 可將動態物件資料與固定文字 wording 字串串接
const age = 36;
const message = 'I am ' + age + ' years old';
const message2 = `I am ${age} years old`;
console.log("message:", message);
console.log("message2:", message2);


