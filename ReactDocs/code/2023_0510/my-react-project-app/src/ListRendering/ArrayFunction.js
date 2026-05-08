import React, { Component } from 'react';

const array = [1,2,3,4,5,6];

class ArrayFunction extends Component {
    render() {

        // 取出"最後一個"元素6
        const no = array.pop();
        console.log("no:", no);
        // 取出"第一個"元素1
        array.shift();

        // 放入元素至最後一個 7
        array.push(0);
        // 放入元素至第一個 0
        array.unshift(7);

        array.reverse();
        const newArray = [...array];
        console.log("newArray:", newArray);

        array.sort();

        array.splice(5);
        array.splice(2, 0, 18);
        

        return (
            <div>
               <h3>1.Array map 陣列走訪</h3>
               {
                array.map(
                    (elem,idx) => <li>{`${idx} : ${elem}`}</li>
                )
               }
               <h3>2.Array filter 陣列元素過濾</h3>
               {
                array
                .filter( e => e % 2 == 0 )
                .map((elem,idx) => <li>{`${idx} : ${elem}`}</li>)
               }
               <h3>3.Array reduce 陣列元素減少</h3>
               { 
                array.reduce( 
                    (accumulator,elem,idx) => accumulator + elem, 4 
                ) 
               }
            </div>
        );
    }
}

export default ArrayFunction;