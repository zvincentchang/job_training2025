import React, {createContext} from 'react';


const Context = createContext({
    open: false,
    toggle: () => {}
});

export default Context;
