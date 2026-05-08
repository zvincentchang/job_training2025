import { createContext } from 'react';

// createContext並給予初始值
const context = createContext({
    orders: [],
    addOrder: () => {}
});

export default context;
