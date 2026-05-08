// ProductDetail.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function ProductDetail() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        // 使用axios進行GET請求取得特定產品的詳細資料
        axios.get(`http://localhost:8080/api/products/${id}`)
            .then(response => {
                setProduct(response.data);
            })
            .catch(error => {
                console.error('Error fetching product detail:', error);
            });
    }, [id]);

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container">
            <div className="col-md-3">
                <h2>{product.title}</h2>
                <div className="card">
                    <div className="img">
                        <img className="card-img-top" src={product.image} alt="" />
                    </div>
                    <div className="card-body">
                        <p className="card-text">產品價格: {product.price}</p>
                        <p className="card-text">產品描述: {product.description}</p>
                        {/* 這裡可以顯示其他產品詳細資訊 */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;
