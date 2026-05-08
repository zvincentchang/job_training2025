// import React, { Component, createRef } from 'react';

// class UseRefDom extends Component {

//     ref = createRef();

//     componentDidMount(){
//         this.ref.current.value = 'HelloWorld';
//         this.ref.current.focus();
//     }

//     render() {
//         return <input ref={this.ref} />;
//     }
// }

// export default UseRefDom;


import React, { useRef } from 'react';

const UseRefDom = () => {
    
    // ref儲存DOM的參照
    // 與createRef()差異在不會每次都建立新的ref
    const inputDateRef = useRef();
    // 將初始值宣告為陣列[]儲存多個ref
    const inputRef = useRef([]);

    const onChangeData = () => {
        const inputDate = inputDateRef.current.value;
        const inputDateOne = inputRef.current[0].value;
        const inputDateTwo = inputRef.current[1].value;
        console.log("inputDate:", inputDate);
        console.log("inputDateOne:", inputDateOne);
        console.log("inputDateTwo:", inputDateTwo);
    }

    // 取得當天日期並且帶入type="date" defaultValue
    const date = new Date();
    const month = date.getMonth() + 1;
    const day = date.getDate();    
    const dateMonth = month < 10 ? `0${month}` : month;
    const dateDay = day < 10 ? `0${day}` : day;
    const dateText = `${date.getFullYear()}-${dateMonth}-${dateDay}`;
    
    return (
        <div>
            <input
                type="date"
                onChange={onChangeData}
                ref={inputDateRef}
            />
            <h3>Start Date：</h3>
            <input
                type="date"
                onChange={onChangeData}
                ref={el => (inputRef.current[0] = el)}
                defaultValue={dateText}
            />
            <h3>End Date：</h3>
            <input
                type="date"
                onChange={onChangeData}
                ref={el => (inputRef.current[1] = el)}
                defaultValue={dateText}
            />
        </div>
    );
};

export default UseRefDom;