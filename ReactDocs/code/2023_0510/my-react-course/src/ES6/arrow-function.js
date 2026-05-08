
const customer1 = {age:36, name:"Shang"};
const customer2 = {age:16, name:"Wendy"};

// 傳統Function
function visitMessage1(cus) {
  var age = cus.age;
  var name = cus.name;
  // 根據 age 資料回傳不同字串
  if (age < 18) {
    return 'Dear ' + name + ', you are under age:' + age;
  }
  return 'Welcome, ' + name + ':' + age + '!';
}

console.log( visitMessage1(customer1) ); // Welcome, Shang:36!

console.log("--------------------------------------");
/*
箭頭函式
宣告常數等於一個"函式"
1.箭頭後面接"大括弧"表示方法內"多行"實作,且最後必須有回傳結果 
  () => { return xxx; }
2.字串模板 `... ${name} ...`
*/
const visitMessage2 = (cus) => {
  // 物件解構
  const { age, name } = cus;
  // 字串模板
  const text = age < 18 ?
  `Dear ${name}, you are under age:${age}`
  : `Welcome, ${name}:${age}!`;
  
  return text;
};

console.log( visitMessage2(customer2) ); // Dear Wendy, you are under age:16

console.log("--------------------------------------");
/*
3.箭頭後面接"小括弧"(可省略)表示方法內"單行"實作
  表示直接要回傳括弧內的結果 () => ()
4.直接在參數上「解構」物件 { age, name }
*/
const visitMessage3 = ({ age, name }) => (
  age < 18 
  ? `Dear ${name}, you are under age:${age}`
  : `Welcome, ${name}:${age}!`
);

console.log( visitMessage3(customer2) ); // Dear Wendy, you are under age:16

console.log("--------------------------------------");

/*
// 求圓面積
function circleArea(radius) {
  return radius * radius * Math.PI;
}
*/

// 5.箭頭後面接回傳結果省略"小括弧"
const circleArea = radius => radius * radius * Math.PI;

console.log(circleArea(10)); // 314.1592653589793