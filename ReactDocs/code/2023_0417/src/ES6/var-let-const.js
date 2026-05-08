// 宣告 let 值可被更改，const 值不可被更改

let text = 'Hello1';
// const text = 'Hello1';

console.log("Text:", text);

text = 'Hello2';

console.log("Text:", text);

// global scope(全域作用域)
var x = 1;
function f() {
    // function scope(函式作用域)
    var x = 2;
    // 如function scope未宣告則將會被global scope從外而內傳遞進去取代
    console.log(x); // 2
}
f();
console.log(x); // 1

console.log('------------------------------------------------------');

var y = 1;
// 作用域: block { }
{
    var y = 2;
    console.log(y); // 2
}
console.log(y); // 2

console.log('------------------------------------------------------');

let z = 1;
// 作用域: block { }
{
    let z = 2;
    console.log(z); // 2
}
console.log(z); // 1
