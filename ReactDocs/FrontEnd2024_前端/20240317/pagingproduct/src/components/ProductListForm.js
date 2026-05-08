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
            <div className='col-md-4'>
            <form onSubmit={handleAddProduct}>
                <div className="mb-3">
                    <label htmlFor="productName" className="form-label">產
                        品名稱:</label>
                    <input type="text" className="form-control"
                        id="productName" value={name} onChange={handleNameChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="productPrice" className="form-label">價
                        格:</label>
                    <input type="number" className="form-control"
                        id="productPrice" value={price} onChange={handlePriceChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="productDescription"
                        className="form-label">描述:</label>
                    <textarea className="form-control"
                        id="productDescription" value={description} onChange={handleDescriptionChange}
                    />
                </div>
                <button type="submit" className="btn btn-primary">新增產品
                </button>
            </form>
            </div>
            {products.length > 0 ? (                
                 <table className="table table-striped">
                 <thead>
                     <tr>
                         <th scope="col">產品</th>
                         <th scope="col">產品價格</th>
                         <th scope="col">產品說明</th>
                         <th scope="col">Action</th>
                     </tr>
                 </thead>
                 <tbody>
                    {products.map((product, index) => (
                         <tr key={product.id}>
                         <td>{product.name}</td>
                         <td>{product.price}</td>
                         <td>{product.description}</td>
                         <button className="btn btn-primary" onClick={()=> handleRemoveProduct(index)}>移除產品</button>
                        </tr>
                       
                    ))}
                </tbody>
                </table>
            ) : (
                <p>目前沒有任何產品。</p>
            )}
        </div>
    );
};
export default ProductListForm;