
import { Link } from "react-router-dom";


//import AddToBasketBtn from "components/AddToBasketBtn";

const Card = ({ product }) => {
  return (
    <div className="col-md-3">
      <div className="Card" >

        <Link to={`/product/${product.id}`}>
          <div className="img">
            <img  className="card-img-top img-fluid" src={product.image} alt="" />
          </div>
          <div className="info">
            <div className="title">
              {product.title}
            </div>
            <div className="footer">
              <div className="price">
                {product.price.toFixed(2)} <small>TRY</small>
              </div>
              <div className="btn">
                {/* <AddToBasketBtn data={product} /> */}
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Card;
