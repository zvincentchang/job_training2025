import React, { useEffect, useState } from 'react';
import ConcertList from './ConcertList';
import 'bootstrap/dist/css/bootstrap.min.css';

const NetConcert = () => {
    const [concertData, setConcertData] = useState(null);
    // 新增狀態 concertData，初始值為 null
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=17`);
                const data = await response.json();
                console.log('Movie Data:', data);
                setConcertData(data); // 將抓回來的資料設定到狀態 concertData 中
            } catch (error) {
                console.log('Error:', error);
            }
        };
        fetchData();
    }, [concertData]);

    if (!concertData) {
        return <div>Fetching Concert Data...</div>;
    }
    return (
        <div>
            <ConcertList concerts={concertData} />
        </div>
    );
};
export default NetConcert;

