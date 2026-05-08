function test(value){
    alert('test:'+value);
}
function showTypes(){
    console.log(typeof 'hello');
    console.log(typeof 123);
    console.log(typeof true);
    console.log(typeof 1.0);
}

var square = function(number) {
    return number * number;
};

function cube(n){
   return n*n*n;
}

function factorial(n){
    if(n<=1)
      return 1;
    else
      return  n*factorial(n-1);
}