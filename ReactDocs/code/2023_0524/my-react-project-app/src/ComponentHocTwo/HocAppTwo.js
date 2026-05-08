import React from 'react'
import WithAddText from './withAddText'; // 邏輯
import WithFilterText  from './withFilterText'; // 邏輯
import CommonViewList from './CommonViewList'; // 畫面

const HocAppTwo = () => {
  return (
    <div>
      <WithFilterText WrappedComponentView={CommonViewList} />
      <hr/>
      <WithAddText WrappedComponentView={CommonViewList} />
    </div>
  )
};

export default HocAppTwo;