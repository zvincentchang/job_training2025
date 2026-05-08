import React from 'react'

function FunctionClick() {
      function clickHandler() {
        console.log('Button clicked');
        alert('clickHandler');
      }
      return (
        <div>
          <button onClick={clickHandler}>Click</button>
        </div>
      )
}
export default FunctionClick;
