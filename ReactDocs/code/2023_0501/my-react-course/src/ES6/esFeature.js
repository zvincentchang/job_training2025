// 陣列解構
console.log("-------------------- 陣列解構 --------------------");
const point = [1,2,3,4,5];
const [x, y, ...rest] = point;

console.log("x:", x); // 1
console.log("y:", y); // 2
console.log("rest:", rest); // 3,4,5

// 物件解構
console.log("-------------------- 物件解構 --------------------");
const pointObj = {a:1, b:2, c:3};
const {a, b, c} = pointObj;
console.log("`${a}_${b}_${c}`:",`${a}_${b}_${c}`);

// 字串模板
console.log("-------------------- 字串模板 --------------------");
const age  = 36;
const message1 = 'I am ' + age + ' years old';
const message2 = `I am ${age} years old`;
console.log("message2:", message2); // I am 36 years old

// ES6: callback、async/await
console.log("-------------------- ES6 接收非同步請求回傳結果:callback --------------------");
import fetch from "node-fetch"; // 須在 package.json 加上參數 "type": "module"

// fetch 為非同步請求不能直接接收所回傳的結果
// fetch 基於Promise實現所回傳的資料型別為 Promise<Response>

// 1.透過 fetch 原廠 callback 回調函數
const getPostsData = (userID) => {
    const userData =  fetch('https://jsonplaceholder.typicode.com/posts/' + userID)
    // 此處為非同步回傳
    .then( rs => rs.json() )
    // 透過fetch原廠callback回調函數
    .then((userData) => console.log("FetchCallbackFun:", userData) )
    .catch(error => {
        console.log(error);
    });

    console.log("getPostsData inner:", userData); // Promise { <pending> }

    return userData;
};

const user1 = getPostsData(1);
console.log("getPostsData outter:", user1); // Promise { <pending> }

// 2.自行撰寫 callback 回調函數(利用函數當做參數傳入取得非同步的回傳結果)
const callbackFetchPostsData = (callback, userID) => {
    fetch('https://jsonplaceholder.typicode.com/posts/' + userID)
    // 此處為非同步回傳
    .then( rs => rs.json() ) 
    // 須加.then接收回傳結果
    .then((userData) => {
        callback(userData);
    })
    .catch(error => {
        console.log(error);
    });
};

callbackFetchPostsData( (user) => {
    console.log("FetchCallbackCusFun:", user);
}, 2);

console.log("-------------------- ES6 接收非同步請求回傳結果:async/await --------------------");

// 3.ES6:async/await
// await後面必須接為Promise回傳的結果,且函數前面必須寫上async
const asyncFetchPostsData = async (userID) => {
    const userData = await fetch('https://jsonplaceholder.typicode.com/posts/' + userID)
    .then( rs => rs.json())
    .catch(error => {
        console.log("FetchError:",error);
    });

    console.log("inner:", userData);
    
    return userData;
};

// 在函數"內"要接回fetch非同步請求
// 須在被呼叫的函數參數括弧前加 "async"、fetch函數前加 "await"
// asyncFetchPostsData();

// 在函數"外"要接回fetch非同步請求，須在呼叫函數前加 "await"
// PS:被呼叫的函數上不須加 "async"、函數內不須加"await"
const user = await asyncFetchPostsData(3);
console.log("outter:", user);

