import React from 'react';

import withOpen from './hocs/withOpen';     // 父組件:邏輯(HOC)
import ReactImgView from './ReactImgView';  // 子組件:畫面
import VueImgView from './VueImgView';      // 子組件:畫面

// 相同邏輯組件套用在不同畫面組件(邏輯共用畫面不同)
// 上層"共用"父組件:withOpen，下層"個別"子組件:ReactImgView、VueImgView
const ReactImgViewWithOpen = withOpen(ReactImgView);
const VueImgViewWithOpen = withOpen(VueImgView);

// HocAppOne 最上層組件
const HocAppOne = ()  => (
    <div>        
        <ReactImgViewWithOpen topField={'React Top Field'}/>
        <hr/>
        <VueImgViewWithOpen topField={'Vue Top Field'}/>
        <hr/>
    </div>
);

export default HocAppOne;