import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const CreateOrder = () => {
  const [product, setProduct] = useState('');
  const [quantity, setQuantity] = useState(0);

  const handleSubmit = event => {
    event.preventDefault();
   
    // fetch('/api/orders', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({ product, quantity }),
    // })
    //   .then(response => response.json())
    //   .then(data => {
        
    //   });
  };

  return (
    <Container>
      <h1>建立訂單</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="product">
          <Form.Label>選擇產品</Form.Label>
          <Form.Control
            as="select"
            value={product}
            onChange={event => setProduct(event.target.value)}
          >
            {/* 渲染可選的產品選項 */}
            <option value="product1">產品1</option>
            <option value="product2">產品2</option>
            <option value="product3">產品3</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="quantity">
          <Form.Label>選擇數量</Form.Label>
          <Form.Control
            type="number"
            value={quantity}
            onChange={event => setQuantity(event.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          提交訂單
        </Button>
      </Form>
    </Container>
  );
};

export default CreateOrder;

