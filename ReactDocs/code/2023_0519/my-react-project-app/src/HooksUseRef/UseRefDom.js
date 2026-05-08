import React, { useRef } from 'react';

const UseRefDom = () => {

    const inputDataRef = useRef();
    const inputRefs = useRef([]);


    const onChangeData = () => {
        const inputDate = inputDataRef.current.value;
        const inputDateOne = inputRefs.current[0].value;
        const inputDateTwo = inputRefs.current[1].value;

        console.log("inputDate:", inputDate);
        console.log("inputDateOne:", inputDateOne);
        console.log("inputDateTwo:", inputDateTwo);
    };

    // 取得當天日期並且帶入type="date" defaultValue
    const date = new Date();
    const month = date.getMonth() + 1;
    const dateMonth = month < 10 ? `0${month}` : month;
    const dateText = `${date.getFullYear()}-${dateMonth}-${date.getDate()}`;

    return (
        <div>
            <div>
                <input
                    type="date"
                    onChange={onChangeData}
                    ref={inputDataRef}
                />
                <h3>Start Date：</h3>
                <input
                    type="date"
                    onChange={onChangeData}
                    ref={el => (inputRefs.current[0] = el)}
                    defaultValue={'2023-06-02'}
                />
                <h3>End Date：</h3>
                <input
                    type="date"
                    onChange={onChangeData}
                    ref={el => (inputRefs.current[1] = el)}
                    defaultValue={dateText}
                />
            </div>

        </div>
    );
};

export default UseRefDom;
