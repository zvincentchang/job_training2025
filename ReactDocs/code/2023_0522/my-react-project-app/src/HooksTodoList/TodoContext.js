import { createContext } from "react";

const todoContext = createContext({
    addItem: () => {}
});

export const { Provider, Consumer } = todoContext;
export default todoContext;