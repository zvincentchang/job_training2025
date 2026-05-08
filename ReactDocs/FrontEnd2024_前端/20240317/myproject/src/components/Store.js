import MyCard from "./Card";
import useMakeRequest from "./useMakeRequest";


const Store = () => {
  const result = useMakeRequest("https://fakestoreapi.com/products/");

  return (

    <div className="container">
      <div className="row">
        {result.data ? (  // result.data=products
          <MyCard products={result.data} />
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
