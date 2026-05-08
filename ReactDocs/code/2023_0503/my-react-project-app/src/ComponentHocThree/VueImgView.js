import React, { Component } from 'react';
import vueImg from '../IMG/logo-vue-js.jpg';

const VueImgView = (props) => {
  const{ open, toggleOpen, topField } = props;
  return (
    <div>
        <h3>{topField}</h3>
        <button onClick={toggleOpen}>VueImgView</button>
        <br/>
        { open && <img src={vueImg}/> }
    </div>
  )
};

export default VueImgView;


// class VueImgView extends Component {

//     render() {

//         const{ open, toggleOpen } = this.props;

//         return (
//             <div>
//                <h3>{this.props.topField}</h3>
//                <button onClick={toggleOpen}>VueImgView</button>
//                <br/>
//                { open && <img src={vueImg}/> }
//             </div>
//         );
//     }

// }

// export default VueImgView;