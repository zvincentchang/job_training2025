//import MyCard from "./Card";
import useMakeRequest from "./useMakeRequest";
import PagingCard from "./PagingCard";

const Store = () => {
  const result = useMakeRequest("https://fakestoreapi.com/products/");

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
