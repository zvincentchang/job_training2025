import React, {useState , useEffect } from 'react';
const FetchData = ({ userId }) => {
    const [post, setPost] = useState(null);
    const handleChange=(evt)=>{
        alert(evt.target.value);
    };
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await
                    fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`);
                const data = await response.json();
                console.log('User Data:', data);
                setPost(data);
            } catch (error) {
                console.log('Error:', error);
            }
        };
        fetchData();
    }, [userId]);
    if(!post){
        return <div>Fetching Data</div>
    }
    return <div className='container'>
    User Id :<select onChange={handleChange} value="`${userId}`">
        <option>1</option>
        <option>2</option>
        <option>3</option>
    </select>
    <h2 className="text-center">Book Details</h2>
    <table className="table table-striped">
        <thead>
            <tr>
                <th>User Id</th>
                <th>Post Id</th>
                <th>Title</th>
            </tr>
        </thead>
        <tbody>
            {
                post.map(p =>
                    <tr key={p.id}>
                        <td>{p.userId}</td>
                        <td>{p.id}</td>
                        <td>{p.title}</td>
                    </tr>
                )
            }
        </tbody>
    </table>
</div>;
};
export default FetchData;