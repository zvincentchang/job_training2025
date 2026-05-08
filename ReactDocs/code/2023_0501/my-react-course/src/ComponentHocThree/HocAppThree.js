import React from 'react';

import WithOpen from './hocs/withOpen';     // 父組件:邏輯(HOC)
import ReactImgView from './ReactImgView';  // 子組件:畫面
import VueImgView from './VueImgView';      // 子組件:畫面

// 相同邏輯組件套用在不同畫面組件(邏輯共用畫面不同)
// 上層"共用"父組件:withOpen，下層"個別"子組件:ReactImgView、VueImgView
// 運用 Functional Component 函數組件搭配 Anonymous class 匿名類別，組合邏輯組件與畫面組件
// const ReactImgViewWithOpen = withOpen(ReactImgView);
// const VueImgViewWithOpen = withOpen(VueImgView);

// 也可以使用一般組件(WithOpen)來組合邏輯組件與畫面組件
// HocAppOne 最上層組件
const HocAppOne = ()  => (
    <div>        
        {/* <ReactImgViewWithOpen topField={'React Top Field'}/> */}
        <WithOpen WrappedComponent = {ReactImgView} topField={'React Top Field New'}/>
        <hr/>
        {/* <VueImgViewWithOpen topField={'Vue Top Field'}/> */}
        <WithOpen WrappedComponent = {VueImgView} topField={'React Top Field New'}/>
        <hr/>
    </div>
);

export default HocAppOne;