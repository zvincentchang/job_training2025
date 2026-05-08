import React, { useEffect ,useState} from 'react';
const FetchUserData = ({ userID }) => {
    const [userData ,setUserData]=useState("");
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${userID}`);
                const data = await response.json();
                setUserData(data);
                console.log('User Data:', data);
            } catch (error) {
                console.log('Error:', error);
            }
        };
        fetchData();
    }, [userID]);
    return <div>
              <h3>Fetching Data...</h3>
              <h3>Title:{userData.title}</h3>
              <h3>Body:{userData.body}</h3>
          </div>;
};
export default FetchUserData;