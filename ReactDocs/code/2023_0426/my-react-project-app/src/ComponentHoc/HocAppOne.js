import React from 'react'
import withOpen from './hocs/withOpen'; // 邏輯元件
import ReactImgView from './ReactImgView'; // 畫面元件
import VueImgView from './VueImgView'; // 畫面元件

const ReactImgViewWithOpen = withOpen(ReactImgView);
const VueImgViewWithOpen = withOpen(VueImgView);


const HocAppOne = () => (
  
    <div>
      <ReactImgViewWithOpen topField={'React Top Field New 2'} />
      <hr/>
      <VueImgViewWithOpen topField={'Vue Top Field New 3'}/>
    </div>
  
);

export default HocAppOne;
