import React, { useState, useEffect } from 'react';

const ComponentSession = () => {
    const [data, setData] = useState([]);
    const [selectedData, setSelectedData] = useState(null);

    useEffect(() => {
        // 呼叫getAll API來取得所有資料
        fetch('http://localhost:8080/data', {
            method: 'GET',
            credentials: 'include' // 保留session cookie
        })
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const handleGetDataById = (id) => {
        // 呼叫getById API來取得特定ID的資料
        fetch(`http://localhost:8080/data/${id}`, {
            method: 'GET',
            credentials: 'include' // 保留session cookie
        })
            .then(response => response.json())
            .then(data => setSelectedData(data))
            .catch(error => console.error('Error fetching data by id:', error));
    };

    return (
        <div>
            <h2>All Data:</h2>
            <ul>
                {data.map(item => (
                    <li key={item.id}>
                        <button onClick={() => handleGetDataById(item.id)}>
                            {item.user} - {item.phone}
                        </button>
                    </li>
                ))}
            </ul>
            {selectedData && (
                <div>
                    <h2>Selected Data:</h2>
                    <p>Name: {selectedData.user}</p>
                    <p>Description: {selectedData.phone}</p>
                    {/* 這裡顯示其他資料欄位 */}
                </div>
            )}
        </div>
    );
};

export default ComponentSession;
