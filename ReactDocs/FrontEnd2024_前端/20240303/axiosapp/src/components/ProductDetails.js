import React from 'react'

const ProductDetails=({products,addToCart }) =>{
    const { id } = useParams();
    const product = products.find((p) => p.id === parseInt(id));

    function handleAddToCart() {
      addToCart(product);
    }

    return (
      <div>
        <h1>{product.name}</h1>
        <p>${product.price}</p>
        <button onClick={handleAddToCart}>Add to Cart</button>
      </div>
    );
  }

  export default ProductDetails;