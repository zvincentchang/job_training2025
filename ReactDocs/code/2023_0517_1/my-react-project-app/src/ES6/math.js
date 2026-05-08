// Export 匯出
// 1. export default (只能有一個) 
// 	預設匯出什麼, 匯入的 JS 就會 import 到什麼
//      import 時名子不須一樣

const math = {
    double: x => x * 2,
    square: x => x * x,
    area: (w,h) => w * h
};


export default math;

// 2. named export (可以多個)
// 	 import 時名子必須一樣


const circleAreaFun = (radius) => radius * radius * Math.PI;
export {circleAreaFun}

export const PI = 3.1415;

