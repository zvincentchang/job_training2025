import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import Snap0 from './CarouselImg/Snap0.png';
import Snap1 from './CarouselImg/Snap1.png';
import Snap2 from './CarouselImg/Snap2.png';
import Snap3 from './CarouselImg/Snap3.png';
import Snap4 from './CarouselImg/Snap4.png';
import Snap5 from './CarouselImg/Snap5.png';

const Carousels = () => {

    return (
        <Container>
            {/* <Carousel fade> 一般輪播 */}
            <Carousel>
                <Carousel.Item>
                    <img className="d-block w-100" src={Snap0} alt="First slide"/>
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={Snap1} alt="Second slide"/>
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={Snap2} alt="Third slide"/>
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={Snap3} alt="Four slide"/>
                    <Carousel.Caption>
                        <h3>Four slide label</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <hr/>
            
            {/* <Carousel fade> 淡入淡出效果 */}
            <Carousel fade>
                <Carousel.Item>
                    <img className="d-block w-100" src={Snap0} alt="First slide"/>
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={Snap1} alt="Second slide"/>
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={Snap2} alt="Third slide"/>
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={Snap3} alt="Four slide"/>
                    <Carousel.Caption>
                        <h3>Four slide label</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Container>
    )
};

export default Carousels;
