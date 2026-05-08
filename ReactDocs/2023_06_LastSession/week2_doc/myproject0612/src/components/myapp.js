import React from 'react';

const MyApp = () => {
  const numbers = [1, 2, 3, 4, 5];
  function callback(preNumber, currentNumber){
       return preNumber + currentNumber;
   }

 
  // 使用 map() 方法將每個數字乘以 2
  const doubledNumbers = numbers.map((n) => n * 2);

  // 使用 filter() 方法過濾出大於 3 的數字
  const filteredNumbers = numbers.filter((number) => number > 3);

  // 使用 reduce() 方法計算所有數字的總和
  //const sum = numbers.reduce((accumulator, currentNumber) => accumulator + currentNumber, 0);
  const sum = numbers.reduce(callback, 0);
  
  return (
    <div>
      <h1>React App</h1>
      <h2>Doubled Numbers: {doubledNumbers.join(', ')}</h2>
      <h2>Filtered Numbers: {filteredNumbers.join(', ')}</h2>
      <h2>Sum: {sum}</h2>
    </div>
  );
};

export default MyApp;
