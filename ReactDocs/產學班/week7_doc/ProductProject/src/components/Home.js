
import Card from "./Card";
import useMakeRequest from "./useMakeRequest";

const Home = () => {
  const result = useMakeRequest("https://fakestoreapi.com/products/");
 
    return (
      
        <div className="container">         
          <div className="row">
            {result.data ? (
              result.data.map((product, key) => <Card product={product} key={key} />)
            ) : (
              <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                <h2>No Data</h2>
              </div>
            )}
          </div>
        </div>
     
    );
  
};

export default Home;
