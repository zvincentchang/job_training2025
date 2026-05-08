import React, { useEffect, useState } from 'react';
import ConcertList from './ConcertList';
import 'bootstrap/dist/css/bootstrap.min.css';


const NetConcert = () => {
    const [concertData, setConcertData] = useState([]);
    // 新增狀態 concertData，初始值為 null
    const [category, setCategory] = useState("演唱會");
    const [url , setUrl]=useState('http://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=17');
    const handleChange = (event) => {
        setCategory(event.target.value)
        var st="http://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=";
        setUrl(st+event.target.value);
    }
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const data = await response.json();
                console.log('Movie Data:', data);
                setConcertData(data); // 將抓回來的資料設定到狀態 concertData 中
            } catch (error) {
                console.log('Error:', error);
            }
        };
        fetchData();
    }, [concertData,url]);

    if (!concertData) {
        return <div>Fetching Concert Data...</div>;
    }
    return (
        <div className='container'>   
             <select value={category} onChange={handleChange}>
                        <option value="17">演唱會</option>
                        <option value="16">非售票</option>
                        
             </select>         
            <ConcertList concerts={concertData} />
        </div>
    );
};
export default NetConcert;
