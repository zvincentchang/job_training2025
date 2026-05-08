import React, { useEffect, useState } from 'react';
const MovieData = () => {
    const [movieData, setMovieData] = useState(null);
    // 新增狀態 movieData，初始值為 null
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = 
                await  fetch(`https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=17`);
                const data = await response.json();
                console.log('Movie Data:', data);
                setMovieData(data); // 將抓回來的資料設定到狀態movieData 中
            } catch (error) {
                console.log('Error:', error);
            }
        };
        fetchData();
    }, [movieData]);
    if (!movieData) {
        return <div>Movie Data Fetching...</div>;
    }
    return (
        // <div>
        //     <h2>movie Data:</h2>
        //     <p>Title: {movieData[0].title}</p>
        //     <p>Description: {movieData[0].descriptionFilterHtml}</p>
        //     {/* 在這裡顯示更多使用者資料 */}
        // </div>
         <div className = "container">            
         <h1 className = "text-center"> Employees List</h1>
         <table className = "table table-striped">
             <thead>
                 <tr>
                     <th> Movie Title</th>
                     <th> Description</th>
                    
                 </tr>

             </thead>
             <tbody>
                 {
                     movieData.map(
                             mv =>
                             <tr key = {mv.UID}>
                                 <td> {mv.title }</td>
                                 <td> {mv.descriptionFilterHtml}</td>                             
                             </tr>

                     )
                 }
             </tbody>
         </table>

     </div>
    );
};
export default MovieData;