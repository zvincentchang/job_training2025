import React, { Component, Fragment } from 'react';
import { Router } from 'react-router';

class Render extends Component {

    render() {
        // 1.React16之前最外面一定要包一個JSX元素(React elements)
        // return <div>String</div>

        // React16.2之後
        // 2.Arrays and fragments
        return [ <h1>Arrays</h1>, <div>div</div>, <button>button</button> ];

        // 使用Fragment虛擬元素不會出現在最後的結果(讓React覺得只有一個元素)
        // return (
        //     <Fragment>
        //         <h1>Fragment</h1>
        //         <div>div</div>
        //         <button>button</button>
        //     </Fragment>
        // );

        // babel
        // return (
        //     <>
        //         <h1>babel</h1>
        //         <div>div</div>
        //         <button>button</button>
        //     </>
        // );

        // 3.Portals(傳送門)

        // 4.String and numbers
        // return 'String';
        // return 42;

        // 5.Booleans or null
        // return true;
        // return null;
    }
    
}

export default Render;