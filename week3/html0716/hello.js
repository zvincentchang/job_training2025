function foo() {
    // 在function 變數作用(存在)範圍只在function 裡面
    var carName = 'Ferrari';
    alert(typeof(carName));
    alert(carName); // 會顯示Ferrari
}        
function sayhello() {
    alert('hello');
}