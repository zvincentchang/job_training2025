import React, { useEffect, useState } from 'react';
const FetchMovie = () => {
    const [movieData, setMovieData] = useState(null);
    // 新增狀態 movieData，初始值為 null
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await
                    fetch(`https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFin
dTypeJ&category=8`);
                const data = await response.json();
                console.log('Movie Data:', data);
                setMovieData(data); // 將抓回來的資料設定到狀態movieData 中
            } catch (error) {
                console.log('Error:', error);
            }
        };
        fetchData();
    }, []);
    if (!movieData) {
        return <div>Fetching Data...</div>;
    }
    return (
        <div>
            <h2>movie Data:</h2>
            <p>Title: {movieData[0].title}</p>
            <p>Description: {movieData[0].descriptionFilterHtml}</p>
            {/* 在這裡顯示更多使用者資料 */}
        </div>
    );
};
export default FetchMovie;