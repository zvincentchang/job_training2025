import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProductListForm = () => {
    const [products, setProducts] = useState([]);
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');

    const handleAddProduct = (e) => {
        e.preventDefault();
        const newProduct = {
            id: Date.now(),
            name: name,
            price: price,
            description: description
        };

        setProducts([...products, newProduct]);
        console.log(products);
    };
    const handleRemoveProduct = (index) => {
        const updatedProducts = [...products];
        updatedProducts.splice(index, 1);
        setProducts(updatedProducts);
    };
    const handleNameChange = (e) => {
        setName(e.target.value);
    };
    const handlePriceChange = (e) => {
        setPrice(e.target.value);
    };
    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    };
    return (
        <div className="container">
            <form onSubmit={handleAddProduct}>
                <div className="row justify-content-center mt-5">
                    <div className="col-md-3">

                        <label htmlFor="productName" className="form-label">產品名稱:</label>
                        <input type="text" className="form-control" id="productName" value={name} onChange={handleNameChange} />
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="productPrice" className="form-label">價格:</label>
                        <input type="number" className="form-control" id="productPrice" value={price} onChange={handlePriceChange} />
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="productDescription" className="form-label">描述:</label>
                        <textarea className="form-control" id="productDescription" value={description} onChange={handleDescriptionChange} />
                    </div>
                    <div className="col-md-3">
                        <button type="submit" className="btn btn-primary">新增產品</button>
                    </div>
                </div>

            </form>
            {products.length > 0 ? (
                <ul className="list-group">
                    {products.map((product, index) => (
                        <li className="list-group-item" key={product.id}>
                            <h5>{product.name}</h5>
                            <p>價格：{product.price}</p>
                            <p>描述：{product.description}</p>
                            <button className="btn btn-danger" onClick={() => handleRemoveProduct(index)}>移除產品</button>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>目前沒有任何產品。</p>
            )}
        </div>

    );
};
export default ProductListForm;

