import React, { Component } from 'react';


class ArrayFunction extends Component {    
    render() {

        const array = [1,2,3,4,5,6];

        // 1.Array map 陣列走訪
        const result = array.map(
            (elem,idx) => <li>{`${idx} : ${elem}`}</li>
        );
        
        // 2.Array filter 陣列元素過濾
        const result2 = array.filter( elem => elem % 2 === 0 )
                             .map( elem => <li>{elem}</li> );
                                                
        /*
        3.Array reduce 陣列元素減少
        accumulator 累加器
        第二個參數代表初始值0
        1 + 2 + ... + 6 = 21
        */
        const result3 = array.reduce(
            (accumulator,elem,idx) => accumulator + elem, 0
        );
        
        // PS:map、filter、reduce 函式都不會影響到原有陣列的值
        
        // 下列函式會影響原先陣列的值
        console.log(array.pop()); // 取出最後一個元素 6
        console.log(array.push(7)); // 放入元素至最後一個 7
        console.log(array.shift()); // 取出第一個元素 1
        console.log(array.unshift(0)); // 放入元素至第一個 0
        console.log(array) // [0, 2, 3, 4, 5, 7]
        
        // 陣列元素反轉
        array.reverse();
        console.log(array) // [7, 5, 4, 3, 2, 0]
        
        // const newArr = array.slice().reverse(); // 陣列複制slice就不會影響到原來的陣列
        const newArr = [...array]; // ES6陣列複製
        console.log(newArr) // [7, 5, 4, 3, 2, 0]
        
        array.sort();
        console.log(array); // [0, 2, 3, 4, 5, 7]
        
        array.splice(3); // 只留前面3個元素
        console.log(array); // [0, 2, 3]

        return (
            <div>
                <h3>1.Array map 陣列走訪</h3>
                {result}
                <hr/>
                <h3>2.Array filter 陣列元素過濾</h3>
                {result2}
                <hr/>
                <h3>3.Array reduce 陣列元素減少</h3>
                {result3}
                <hr/>
            </div>
        );
    }
}

export default ArrayFunction;