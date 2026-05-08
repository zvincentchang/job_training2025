import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Form } from 'react-bootstrap';

const Cart = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const items = localStorage.getItem('localCart');
        if (items) {
            setProducts(JSON.parse(items));
            console.log("Carts:" + JSON.stringify(JSON.parse(items)));
        }
    }, []);

    const handleQuantityChange = (productId, newQuantity) => {
        const updatedProducts = products.map((product) => {
            if (product.id === productId) {
                return { ...product, quantity: parseInt(newQuantity) };
            }
            return product;
        });
        setProducts(updatedProducts);
        localStorage.setItem('localCart', JSON.stringify(updatedProducts));
    };

    return (
        <div className='container'>
            {products.length > 0 ? (
                <Container>
                    <Row>
                        {products.map((product) => (
                            <Col key={product.id} md={3}>
                                <Card>
                                    <Card.Img variant="top" style={{ width: '100%', height: '320px' }} src={product.image}></Card.Img>
                                    <Card.Body>
                                        <Card.Title>{product.title}</Card.Title>
                                        <Card.Text>價格： {product.price.toFixed(2)}</Card.Text>
                                        <Form.Group controlId="formQuantity">
                                            <Form.Label>數量</Form.Label>
                                            <Form.Control
                                                type="number"
                                                value={product.quantity}
                                                onChange={(e) => handleQuantityChange(product.id, e.target.value)}
                                            />
                                        </Form.Group>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            ) : (
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <h2>No Data</h2>
                </div>
            )}
        </div>
    );
};

export default Cart;
