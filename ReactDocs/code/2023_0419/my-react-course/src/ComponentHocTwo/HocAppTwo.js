import React from 'react';

import withFilterText from './hocs/withFilterText'; // 父組件:邏輯
import withAddText from './hocs/withAddText';       // 父組件:邏輯
import CommonViewList from './CommonViewList';      // 子組件:畫面(HOC)

// 不同邏輯組件套用在相同畫面組件(邏輯不同畫面共用)
// 上層"個別"父組件:withFilterText、withAddText，下層"共用"子組件:CommonViewList
const FilterTextList = withFilterText(CommonViewList);
const AddTextList = withAddText(CommonViewList);

// HocAppTwo 最上層組件
const HocAppTwo = () => (
    <div>
        <FilterTextList btnText={'文字過濾'}/>
        <hr/>
        <AddTextList btnText={'文字新增'}/>
    </div>
);

export default HocAppTwo;