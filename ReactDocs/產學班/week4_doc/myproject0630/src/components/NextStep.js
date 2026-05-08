import React, { useRef } from 'react';
function NextStep() {
    const nextStepRef = useRef(null);
    const handleCurrentStepCompletion = () => {
        // 當前步驟完成後，設置焦點到下一步驟的第一個輸入欄位
        nextStepRef.current.focus();
    };
    return (
        <div>
            <input type="text" /><br />
            <button onClick={handleCurrentStepCompletion}>Complete
                Step</button>
            <br />
            {/* 下一步驟的第一個輸入欄位 */}
            <input ref={nextStepRef} type="text" />
        </div>
    );
}
export default NextStep;