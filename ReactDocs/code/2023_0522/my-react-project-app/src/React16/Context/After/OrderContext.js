import { createContext } from 'react';

// createContext並給予初始值
const context = createContext({
    // 這是購物車商品編號清單
    orders: [],
    // 這是加入購物車的函數
    addOrder: () => {}
});

export default context;
