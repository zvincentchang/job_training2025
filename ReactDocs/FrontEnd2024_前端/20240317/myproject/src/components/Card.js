import { Link } from "react-router-dom";
import { Container, Row, Col, Card } from 'react-bootstrap';
const MyCard = ({ products }) => {
  return (
    <Container>
      <h1>產品目錄</h1>
      <Row>
        {products.map(product => (
          <Col key={product.id} md={3}>
            <Link to={`/product/${product.id}`}>
              <Card>
                <Card.Img variant="top" style={{ width: '100%', height: '320px' }} src={product.image}></Card.Img>
                <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text>價格： {product.price.toFixed(2)}</Card.Text>
                  {/* 其他產品詳細資訊 */}
                </Card.Body>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>

  );
};

export default MyCard;
