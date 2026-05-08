import { createContext } from "react";

// createContext並給予初始值
const context = createContext({
    open: false, 
    toggle: () => {}
});

export const { Provider, Consumer } = context;
export default context;