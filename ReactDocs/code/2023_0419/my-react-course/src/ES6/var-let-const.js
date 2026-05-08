/*
var、let、const
1.宣告 let 值可被更改，const 值不可被更改
2.function scope(函式作用域) / global scope(全域作用域)
3.scope out → in 會從外而內傳遞進去
*/

// global scope(全域作用域)
var x = 1; 
function f(){
    // function scope(函式作用域)
    var x = 2;
    // 如function scope未宣告則將會被global scope從外而內傳遞進去取代
    console.log(x); // 2
}
f();
console.log(x); // 1


console.log("--------------------------------------");

/*
1.var作用域: scope(全域作用域、函式作用域)
2.let/const(ES6)作用域: block{ }
*/
var y = 1;
{
    // 因為var的作用域在"scope"而不是"block",所以"會"被裡面的取代
    var y = 2; 
    console.log(y); // 2
}
console.log(y); // 2 (被取代)

console.log("--------------------------------------");

let z = 1;
{
    // let、const 看的是"block"區塊,所以"不會"被裡面的取代
    let z = 2; 
    console.log(z); // 2
}
console.log(z); // 1 (未被取代)
