import React from 'react'

function FunctionClick() {
      const clickHandler= ()=> {
           alert('Button clicked');
      }
      return (
        <div>
          <button onClick={clickHandler}>Click</button>
        </div>
      )
}
export default FunctionClick;
