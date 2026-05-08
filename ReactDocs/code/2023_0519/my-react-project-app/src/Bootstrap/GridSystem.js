import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import { Container, Row, Col } from 'react-bootstrap';


const GridSystem = () => {

    const colStyle = { backgroundColor: '#bbeffd', border: '1px solid red' };
    const colStyle1 = { backgroundColor: '#00BB00', border: '1px solid red' };
    return (
        <>
            {/* Fluid Container
            You can use <Container fluid /> for width: 100% across all viewport and device sizes. */}
            < Container fluid >
                <Row>
                    <Col style={colStyle}>1 of 1</Col>
                </Row>
            </Container>
            <hr />

            {/* You can set breakpoints for the fluid prop. Setting it to a breakpoint (sm, md, lg, xl)
            於介定的寬度範圍內元素置中,否則就全版顯示
            sm:small (≥576px)
            md:medium (≥768px)
            lg:large (≥992px)
            xl:extra large (≥1200px)
            will set the Container as fluid until the specified breakpoint. */}

            <Container fluid="sm">
                <Row>
                    <Col style={colStyle}>1 of small devices</Col>
                </Row>
            </Container>
            <hr />
            <Container fluid="xl">
                <Row>
                    <Col style={colStyle1}>1 of extra large</Col>
                </Row>
            </Container>

            <hr />
            {/* Auto-layout columns 自動依照<Col>的個數平均12個網格 */}
            <Container>
                <Row>
                    <Col style={colStyle}>1 of 2</Col>
                    <Col style={colStyle}>2 of 2</Col>
                </Row>
                <Row>
                    <Col style={colStyle1}>1 of 4</Col>
                    <Col style={colStyle1}>2 of 4</Col>
                    <Col style={colStyle1}>3 of 4</Col>
                    <Col style={colStyle1}>4 of 4</Col>
                </Row>
            </Container>

            <hr />
            {/* 
                Setting one column width(12個網格),xs={6}指定所佔的網格數量 
                xs:extra small devices (<576px)
            */}
            <Container>
                <Row>
                    <Col style={colStyle}>1 of 1</Col>
                </Row>
                <Row>
                    <Col style={colStyle1} xs={6}>1 of 3</Col>
                    <Col style={colStyle1}>2 of 3</Col>
                    <Col style={colStyle1}>3 of 3</Col>
                </Row>
                <Row>
                    <Col style={colStyle}>1</Col>
                    <Col style={colStyle}>2</Col>
                    <Col style={colStyle}>3</Col>
                    <Col style={colStyle}>4</Col>
                    <Col style={colStyle}>5</Col>
                    <Col style={colStyle}>6</Col>
                    <Col style={colStyle}>7</Col>
                    <Col style={colStyle}>8</Col>
                    <Col style={colStyle}>9</Col>
                    <Col style={colStyle}>10</Col>
                    <Col style={colStyle}>11</Col>
                    <Col style={colStyle}>12</Col>
                </Row>
            </Container>

            {/* 
                Variable width content 依照視窗長度可動態變動寬度內容 
                sm:small (≥576px)
                md:medium (≥768px)
                lg:large (≥992px)
                xl:extra large (≥1200px)
            */}
            <Container>
                <Row>
                    <Col style={colStyle1} sm="4" md="6" lg="8" xl="10">1 of 3</Col>
                    <Col style={colStyle}>2 of 3</Col>
                    <Col style={colStyle}>3 of 3</Col>
                </Row>
            </Container>
            

        </>
    );
};

export default GridSystem;
