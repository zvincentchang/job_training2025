import React from 'react';
import ProductList from './ProductList'
//import ProductForm from './ProductForm';
import ProductUpdateForm from './ProductUpdateForm';
const ProductApp = () => {
    return (
        <div>
            <ProductUpdateForm />
            <ProductList />            
        </div>
    );
};
export default ProductApp;