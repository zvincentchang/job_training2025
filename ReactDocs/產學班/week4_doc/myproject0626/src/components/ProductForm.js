import React, { useState } from 'react';
const ProductForm = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [id,setId] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('http://localhost:8080/api/products', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id,
                    name,
                    price: parseFloat(price),
                }),
            });
            if (response.ok) {
                setName('');
                setPrice('');
                setId('');
                alert('產品新增成功！');
            } else {
                alert('產品新增失敗！');
            }
        } catch (error) {
            console.error('Error creating product:', error);
        }
    };
    return (
        <div>
            <h2>新增產品</h2>
            <form onSubmit={handleSubmit}>
            <div>
                    <label>編號：</label>
                    <input
                        type="text"
                        value={id}
                        onChange={(event) => setId(event.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>名稱：</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>價格：</label>
                    <input
                        type="number"
                        value={price}
                        onChange={(event) => setPrice(event.target.value)}
                        required
                    />
                </div>
                <button type="submit">新增</button>
            </form>
        </div>
    );
};
export default ProductForm;