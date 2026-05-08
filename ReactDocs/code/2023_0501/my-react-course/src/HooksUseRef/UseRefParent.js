import React, {useState, useRef, useEffect} from 'react'
import UseRefChild from './UseRefChild';

const UseRefParent = () => {

  // 建立與子組件<UseRefChild/>的參照，就可在父組件<UseRefParent/>裡操作子組件的函式
  const parentRef = useRef();

  return (
    <div>
      <button onClick={() => parentRef.current.toggle()} >ChildToggle</button>
      <br/><br/>
      <button onClick={() => parentRef.current.addCount()} >ChildAddCount</button>
      <UseRefChild ref={parentRef} parentAttr={ {initCount:5} } />
    </div>
  )
}

export default UseRefParent;
