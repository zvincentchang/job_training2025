import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Cart = () => {
    var items = localStorage.getItem('localCart');
    var products = [];
    if (items) {
        var arry = JSON.parse(items);
        products = arry;
        console.log("Second:" + JSON.stringify(arry));
    }

    return (
        products.length > 0 ? (
            <Container>
                <Row>
                    <Row>
                        {products.map(product => (
                            <Col key={product.id} md={3}>

                                <Card>
                                    <Card.Img variant="top" style={{ width: '100%', height: '320px' }} src={product.image}></Card.Img>
                                    <Card.Body>
                                        <Card.Title>{product.title}</Card.Title>
                                        <Card.Text>價格： {product.price.toFixed(2)}</Card.Text>
                                        {/* 其他產品詳細資訊 */}
                                    </Card.Body>
                                </Card>

                            </Col>
                        ))}
                    </Row>
                </Row>
            </Container>
        ) : (
            <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                <h2>No Data</h2>
            </div>
        )
    );
}

export default Cart;


 
