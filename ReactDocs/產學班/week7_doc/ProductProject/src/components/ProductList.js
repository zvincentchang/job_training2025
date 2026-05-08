import React from 'react';

function ProductList() {
    // 假設這裡有一個products陣列用來儲存產品資料
    const products = [
        { id: 1, name: '產品A', price: 100 },
        { id: 2, name: '產品B', price: 200 },
        { id: 3, name: '產品C', price: 150 },
    ];

    return (
        <div className="container">
            <h2>產品列表</h2>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">產品編號</th>
                        <th scope="col">產品名稱</th>
                        <th scope="col">價格</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ProductList;
