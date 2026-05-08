console.log("---------------陣列解構---------------");

const point = [1,2,3,4,5];
console.log(point[3]);

const [x,y, ...rest] = point;
console.log('x:',x);
console.log('y:',y);
console.log('rest:', rest);

console.log("--------------- 物件解構---------------");
const pointObj = {a:1, b:2, c:3  };
const {a,b,c} = pointObj;
console.log(`${a}_${b}_${c}`);

console.log("--------------- 字串模板 ---------------");
// 字串模板 (使用頓號 ` `)
// 可將動態物件資料與固定文字 wording 字串串接
const age = 36;
const message = 'I am ' + age + ' years old';
const message2 = `I am ${age} years old`;
console.log("message:", message);
console.log("message2:", message2);

console.log("--------------- ES6 其它語法 ---------------");

const getPostsData = (userID, callBackUser) => {

    const userData = fetch('https://jsonplaceholder.typicode.com/posts/' + userID)
    .then(rs => rs.json())
     // 1.透過 fetch 原廠 callback 回調函數
    // .then( (userData) => console.log(userData)  );
    .then( (userData) => callBackUser(userData)  );

     // console.log("userData:", userData);
};

// getPostsData(2);

// 2. 自行撰寫 callback 回調函數
// 利用函數當做參數傳入取得非同步的回傳結果
const callBackUserFun = (userData) => {

    console.log("CallBackUser:", userData);
    // Call API userData

};
// getPostsData(2, callBackUserFun);


const getPostsDataTwo = async (userID) => {

    const userData = await fetch('https://jsonplaceholder.typicode.com/posts/' + userID)
    .then(rs => rs.json())

    //  console.log("Inner userData:", userData);

     return userData;
};

const user2 = await getPostsDataTwo(3);
console.log("Outter userData:", user2);


