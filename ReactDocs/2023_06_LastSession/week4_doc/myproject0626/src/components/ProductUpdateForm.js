import React, { useState } from 'react';

const ProductUpdateForm = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [id,setId] = useState('');
    const [method,setMethod]=useState('PUT');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('http://localhost:8080/api/products/'+id, {
                method: method,
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
                alert('產品修改成功！');
            } else {
                alert('產品修改失敗！');
            }
        } catch (error) {
            console.error('Error updating product:', error);
        }
    };
    const deleteProduct=(event)=>{
         setMethod('DELETE');
         handleSubmit(event);
    };
    return (
        <div>
            <h2>修改產品</h2>
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
                <button type="submit">修改</button>                
            </form>
            <button type="button" onClick={deleteProduct} >刪除</button>
        </div>
    );
};
export default ProductUpdateForm;