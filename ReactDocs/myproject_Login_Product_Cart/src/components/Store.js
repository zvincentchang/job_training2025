//import MyCard from "./Card";
import PagingCard from './PagingCard';
import useMakeRequest from "./useMakeRequest";


const Store = () => {
  // "https://fakestoreapi.com/products/"
  const result = useMakeRequest("http://localhost:8080/products");

  return (

    <div className="container">
      <div className="row">
        {result.data ? (  // result.data=products
          <PagingCard products={result.data} />
        ) : (
          <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
            <h2>No Data</h2>
          </div>
        )}
      </div>
    </div>

  );

};
export default Store;
