import React, { useEffect } from 'react';
import useMakeRequest from "./useMakeRequest";
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const ShowProduct = ({ changeItem, isLoggedIn }) => {
    const navigate = useNavigate();
    useEffect(() => {
        if (!isLoggedIn) {
            //alert('尚未登入');
            navigate("/");
        }
    }, [isLoggedIn, navigate]);

    // "https://fakestoreapi.com/products/"
    const result = useMakeRequest("http://localhost:8080/products");
    const { pid } = useParams();
    const myCart = [];
    // 等待 result.data 載入完成後再進行產品的尋找
    const product = result.data ? result.data.find(item => item.id === parseInt(pid)) : null;
    const buyproduct = () => {
        //console.log(product);
        var items = localStorage.getItem('localCart');
        var size = 0;
        if (items) {
            var arry = JSON.parse(items);
            arry.push(product);
            size = arry.length;
            localStorage.setItem('localCart', JSON.stringify(arry));
            console.log("Second:" + JSON.stringify(arry));
        }
        else {
            myCart.push(product);
            localStorage.setItem('localCart', JSON.stringify(myCart));
            console.log("first myCart push:" + localStorage.getItem('localCart'));
            size = 1;
        }
        changeItem(size);
        navigate("/products");
    };
    return (
        product ? (
            <Container>
                <Row>
                    <Col md={4}>
                        <Card>
                            <Card.Img variant="top" src={product.image} alt={product.title} />
                            <Card.Body>
                                <Card.Title>{product.title}</Card.Title>
                                <Card.Text>價格： {product.price.toFixed(2)}</Card.Text>
                                {/* 其他產品詳細資訊 */}
                                <Button onClick={buyproduct}>Buy</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        ) : (
            <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                <h2>No Data</h2>
            </div>
        )
    );
}

export default ShowProduct;
