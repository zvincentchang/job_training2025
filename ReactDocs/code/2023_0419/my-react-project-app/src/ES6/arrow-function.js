const customer1 = {age:36, name:"Shang"};
const customer2 = {age:16, name:"Wendy"};

// console.log(customer2.age);
// console.log(customer2.name);

function visitMessage1(cus){
    var name = cus.name;
    var age = cus.age;

    if(age < 18){
        return 'Dear ' + name + ', you are under age:' + age;
    }

    return 'Welcome, ' + name + ':' + age + '!';
}

const wording = visitMessage1(customer1);

console.log("visitMessage1:", wording);

const visitMessage2 = (cus) => {
    // var name = cus.name;
    // var age = cus.age;

    // 物件解構
    const {age, name} = cus;
    // 字串模板
    const text = age < 18 ? `Dear ${name}, you are under age:${age}` 
    : `Welcome, ${name}: ${age}!`;

    return text;
}

const wording2 = visitMessage2(customer2);

console.log("visitMessage2:", wording2);

console.log("-----------------------------------");
// 5.箭頭後面接回傳結果省略"小括弧"
// const circleArea = radius => (radius * radius * Math.PI);
const circleArea = radius => {  return radius * radius * Math.PI};
console.log("circleArea:", circleArea(10) );

console.log("-----------------------------------");

// 4. 直接在參數上「解構」物件  { age, name }
const visitMessage3 = ({age, name}) => {

    // 物件解構
    // const {age, name} = cus;
    // 字串模板
    const text = age < 18 ? `Dear ${name}, you are under age:${age}` 
    : `Welcome, ${name}: ${age}!`;

    return text;
}

const wording3 = visitMessage3(customer2);

console.log("visitMessage3:", wording3);


