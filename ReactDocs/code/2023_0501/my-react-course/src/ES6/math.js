
const math = {
    double: x => x * 2,
    square: x => x * x,
    area: (w,h) => w * h
};

// 1.export default(只能有一個)什麼,別人就會import到什麼東西
// import 時名子不須一樣
export default math;

// 2.named export (可以多個)
// import 時名子須一樣
export const PI = 3.1415;
export const circleAreaFun = (radius) => radius * radius * Math.PI;