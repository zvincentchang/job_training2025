import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Pagination from 'react-bootstrap/Pagination';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Col from 'react-bootstrap/Col'
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck';
import CardImg from './CardImg.svg';
import iPhoneImg1 from './img/iPhone12_256G.jpg';
import iPhoneImg2 from './img/iPhoneMini12_256G.jpg';
import iPhoneImg3 from './img/iPhonePro12_256G.jpg';
import App from './RouterApp/App';
import About from './RouterApp/About';
import Inbox from './RouterApp/Inbox';
import axios from "axios";

const apiUrl = 'http://localhost:8085/training/uploadFileController/reactBootstrapForm';

const Components = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [validated, setValidated] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault(); // 防止瀏灠器預設submit跳頁
        // 使用者送出開啟表單欄位驗証功能
        setValidated(true);
        const form = event.currentTarget;
        console.log("form.checkValidity():", form.checkValidity());
        if (form.checkValidity() === true) {
            console.log("表單驗証送出成功!");
            // 也可透過表單form欄位name取value
            console.log("form.email.value:", form.email.value);
            const formData = new FormData();
            // 運用Object.keys走訪State物件中所有的欄位名、欄位值,並且append至FormData裡面
            Object.keys(formParam).map( (formParamKey) => { 
                    const formParamValue = formParam[formParamKey];
                    formData.append(formParamKey, formParamValue);
                }
            )
            formData.append('uploadFile', form.uploadFile.files[0]);
            
            const formResponse = await axios.post(apiUrl, formData, { timeout: 3000 }).then(rs => rs.data)
            console.log(formResponse);
        }
    };

    // 取得當天日期並且帶入type="date" defaultValue
    const date = new Date();
    const month = date.getMonth() + 1;
    const day = date.getDate();    
    const dateMonth = month < 10 ? `0${month}` : month;
    const dateDay = day < 10 ? `0${day}` : day;
    const dateText = `${date.getFullYear()}-${dateMonth}-${dateDay}`;
    const dateTime = `${date.getHours()}:${date.getMinutes()}`;
    // 2023-02-09 19:50
    const dateTimeLocalText = `${dateText} ${dateTime}`;
    console.log("dateTimeLocalText:", dateTimeLocalText);

    // 建立表單資料參數更新state
    // 1.透過更新React state就可以傳遞給其它的組件使用
    // 2.透過設置state欄位預設值控制DOM元素預設值呈現
    const [formParam, setFormParam] = useState({
        email: '', password: '', address: '', city: '', state: 1, zip: '', radio: '', checkbox: ['One','Two'],
        date: dateText, time: dateTime, dateTimeLocal: dateTimeLocalText, fileName: ''
    });
    
    const onChangeEmail = (e) => { setFormParam(p => ({ ...p, email: e.target.value })) };
    const onChangePassword = (e) => { setFormParam(p => ({ ...p, password: e.target.value })) };
    const onChangeAddr = (e) => { setFormParam(p => ({ ...p, address: e.target.value })) };
    const onChangeCity = (e) => { setFormParam(p => ({ ...p, city: e.target.value })) };
    // 取到的值預設字串型別可以自行轉數字型別
    const onChangeState = (e) => { setFormParam(p => ({ ...p, state: parseInt(e.target.value) })) };
    const onChangeZip = (e) => { setFormParam(p => ({ ...p, zip: e.target.value })) };
    const onChangeRadio = (e) => { setFormParam(p => ({ ...p, radio: e.target.value })) };
    const onChangeCheckbox = (e) => { setFormParam(p => {
        let newCheckboxs = [];
        if(e.target.checked === true){
            // 有勾選(加入清單)
            newCheckboxs = [...p.checkbox, e.target.value];
        }else{
            // 沒有勾選(從清單中移除)
            newCheckboxs = p.checkbox.filter(elem => elem !== e.target.value);            
        }
        return { ...p, checkbox: newCheckboxs }
    })};

    // 透過指定欄位名的方式,就可以不必為每個欄位都撰寫onChange函式
    const onChangeDateField = (e, fieldName) => { setFormParam(p => ({ ...p, [fieldName]: e.target.value })) };

    // 瀏灠檔案上傳欄位
    const onChangeFile = (e) => {
        const changFile = e.target.files;
        const changFileName = changFile.length === 0 ? '' : changFile[0].name;        
        setFormParam(p => ({ ...p, fileName: changFileName }))
    };

    return (
        <Container>

            {/* React Bootstrap Navbar 導航欄 */}
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="home">Home</Nav.Link>
                        <Nav.Link href="link">Link</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
            
            <hr/>

            {/* React Bootstrap Navbar 結合 react-router-dom */}
            <BrowserRouter>
                <Navbar bg="dark" variant={"dark"} expand="lg">    
                    <Navbar.Brand href="#home">React-Bootstrap-React-Router</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="mr-auto">
                            {/* to 路徑對應 Route path */}
                            <Nav.Link as={Link} to="/">App</Nav.Link>
                            <Nav.Link as={Link} to="/about">About</Nav.Link>
                            <Nav.Link as={Link} to="/inbox">Inbox</Nav.Link>
                            <Nav.Link as={Link} to="/inbox/123">InboxUseParams</Nav.Link>
                        </Nav>
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="outline-info">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
                <Routes>
                    <Route path="/" element={<App/>} />
                    <Route path="about" element={<About/>} />
                    <Route path="inbox" element={<Inbox/>}>
                        <Route path=":id" element={<Inbox/>} />
                    </Route>
                </Routes>
            </BrowserRouter>

            <hr />

            <Button variant="outline-primary">Primary</Button>{' '}
            <Button variant="outline-secondary">Secondary</Button>{' '}
            <Button variant="outline-success">Success</Button>{' '}
            <Button variant="outline-warning">Warning</Button>{' '}
            <Button variant="outline-danger">Danger</Button>{' '}
            <Button variant="outline-info">Info</Button>{' '}
            <Button variant="outline-light">Light</Button>{' '}
            <Button variant="outline-dark">Dark</Button>

            <hr />

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        {/* <td colSpan="2">Larry the Bird</td> */}
                        <td>Larry</td>
                        <td>Bird</td>
                        <td>@twitter</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Peter</td>
                        <td>Otto</td>
                        <td>@IG</td>
                    </tr>
                </tbody>
            </Table>

            <hr />

            <Pagination>
                <Pagination.First />
                <Pagination.Prev />
                <Pagination.Item>{1}</Pagination.Item>
                <Pagination.Item>{2}</Pagination.Item>
                <Pagination.Item>{3}</Pagination.Item>
                <Pagination.Item active>{4}</Pagination.Item>
                <Pagination.Item>{5}</Pagination.Item>
                <Pagination.Next />
                <Pagination.Last disabled />
            </Pagination>

            <hr />

            <Button variant="primary" onClick={handleShow}>
                Launch static backdrop modal
            </Button>

            {/* 
                keyboard={false} 按下esc鍵關閉Modal 
                backdrop設置為static時,在其外部點擊時Modal將不會關閉
            */}
            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    backdrop設置為static時,在其外部點擊時Modal將不會關閉
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary">Understood</Button>
                </Modal.Footer>
            </Modal>

            <hr />

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={CardImg} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>

            <hr />

            <CardDeck>
                <Card>
                    <Card.Img variant="top" src={iPhoneImg1} />
                    <Card.Body>
                        <Card.Title>iPhone12 (256G)</Card.Title>
                        <Card.Text>
                        超快速，超越新境界。 具備5G 網速、智慧型手機最快速的A14 仿生晶片、
                        全面延伸的OLED顯示器，擁有四倍耐摔優異表現的超瓷晶盾，還能讓你在每個相機上使用「夜間」模式。
                        </Card.Text>
                        <Card.Text>史上最香蘋果沒買會被女友嫌棄敗金選首!</Card.Text>
                        <Button variant="primary">加入購物車</Button>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src={iPhoneImg2} />
                    <Card.Body>
                        <Card.Title>iPhone12 Mini (256G)</Card.Title>
                        <Card.Text>
                        超快速，超越新境界。 具備5G 網速、智慧型手機最快速的A14 仿生晶片、
                        全面延伸的OLED顯示器，擁有四倍耐摔優異表現的超瓷晶盾，還能讓你在每個相機上使用「夜間」模式。
                        </Card.Text>
                        <Card.Text>便宜一點總比買安卓更讓人看的起!</Card.Text>
                        <Button variant="primary">加入購物車</Button>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src={iPhoneImg3} />
                    <Card.Body>
                        <Card.Title>iPhone 12 Pro (256G)</Card.Title>
                        <Card.Text>
                        超快速，超越新境界。 具備5G 網速、智慧型手機最快速的A14 仿生晶片、
                        全面延伸的OLED顯示器，擁有四倍耐摔優異表現的超瓷晶盾，還能讓你在每個相機上使用「夜間」模式。
                        </Card.Text>
                        <Card.Text>史上最香蘋果買了Pro你就是Pro</Card.Text>
                        <Button variant="primary">加入購物車</Button>
                    </Card.Body>
                </Card>
            </CardDeck>

            <hr />

            {/* noValidate 關閉瀏灠器預設驗証 */}
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control required type="email" placeholder="Enter email" name='email' onChange={onChangeEmail}/>
                        <Form.Control.Feedback>email格式正確!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">email格式錯誤!</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control required type="password" placeholder="Password" onChange={onChangePassword}/>
                        <Form.Control.Feedback>欄位正確!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">欄位錯誤!</Form.Control.Feedback>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridAddress1">
                        <Form.Label>Address</Form.Label>
                        <Form.Control required type="text" placeholder="1234 Main St" onChange={onChangeAddr}/>
                        <Form.Control.Feedback>欄位正確!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">欄位錯誤!</Form.Control.Feedback>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control required type="text" placeholder="City" onChange={onChangeCity}/>
                        <Form.Control.Feedback>欄位正確!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">欄位錯誤!</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>State</Form.Label>
                        {/* React Bootstrap下拉選單透過defaultValue屬性決定預設值選項,且不行透過傳統selected屬姓設置 */}
                        <Form.Control required as="select" defaultValue={formParam.state} onChange={onChangeState}>
                            <option value={''}>Choose...</option>
                            <option value={1}>item one</option>
                            <option value={2}>item two</option>
                            <option value={3}>item three</option>
                        </Form.Control>
                        <Form.Control.Feedback>欄位正確!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">欄位錯誤!</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Zip</Form.Label>
                        <Form.Control required type="number" placeholder="Zip" min={100} onChange={onChangeZip}/>
                        <Form.Control.Feedback>欄位正確!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">欄位錯誤!</Form.Control.Feedback>
                    </Form.Group>
                </Form.Row>

                <Form.Group id="formGridRadio">
                    <Form.Check inline required name='radioName' type="radio" label="RadioOne" 
                        value={'One'} onChange={onChangeRadio} checked= {formParam.radio === 'One' }/>
                    <Form.Check inline required name='radioName' type="radio" label="RadioTwo" 
                        value={'Two'} onChange={onChangeRadio} checked= {formParam.radio === 'Two' }/>
                    <Form.Check inline required name='radioName' type="radio" label="RadioThree" 
                        value={'Three'} onChange={onChangeRadio} checked= {formParam.radio === 'Three' }/>
                </Form.Group>

                <Form.Group id="formGridCheckbox">
                    {/* checkbox不會指定全部選項必選 */}
                    <Form.Check inline required type="checkbox" label="CheckboxOne" 
                        value={'One'} onChange={onChangeCheckbox} checked={formParam.checkbox.includes('One')}/>
                    <Form.Check inline type="checkbox" label="CheckboxTwo" 
                        value={'Two'} onChange={onChangeCheckbox} checked={formParam.checkbox.includes('Two')}/>
                    <Form.Check inline type="checkbox" label="CheckboxThree" 
                        value={'Three'} onChange={onChangeCheckbox} checked={formParam.checkbox.includes('Three')}/>
                </Form.Group>

                <Form.Row>
                    <Form.Group as={Col} controlId="formDate">
                        <Form.Label>Date</Form.Label>
                        <Form.Control required type="date" name='date_of_birth' value={formParam.date} 
                            onChange={(e) => onChangeDateField(e,'date')}/>
                        <Form.Control.Feedback>欄位正確!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">欄位錯誤!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formTime">
                        <Form.Label>Time</Form.Label>
                        <Form.Control required type="time" name='date_of_time' value={formParam.time} 
                            onChange={(e) => onChangeDateField(e,'time')}/>
                        <Form.Control.Feedback>欄位正確!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">欄位錯誤!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formDatetimeLocal">
                        <Form.Label>Datetime-local</Form.Label>
                        <Form.Control required type="Datetime-local" name='date_of_dateTime' 
                                value={formParam.dateTimeLocal} onChange={(e) => onChangeDateField(e,'dateTimeLocal')}/>
                        <Form.Control.Feedback>欄位正確!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">欄位錯誤!</Form.Control.Feedback>
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} xs={6}>
                        <Form.File id="formcheck-api-custom" custom>
                            <Form.File.Input required name="uploadFile" onChange={onChangeFile}/>
                            <Form.File.Label data-browse="Upload Button">
                                {formParam.fileName ? formParam.fileName : '選擇要上傳的檔案...'}
                            </Form.File.Label>
                            <Form.Control.Feedback type="valid">已選擇檔案!</Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">未選擇檔案!</Form.Control.Feedback>
                        </Form.File>
                    </Form.Group>
                </Form.Row>

                <Button variant="primary" type="submit">Submit</Button>
            </Form>
            <hr />
            <pre>{JSON.stringify(formParam, null, 3)}</pre>
            <hr />
            <p className="h1">h1. Bootstrap heading</p>
            <p className="h2">h2. Bootstrap heading</p>
            <p className="h3">h3. Bootstrap heading</p>
            <p className="h4">h4. Bootstrap heading</p>
            <p className="h5">h5. Bootstrap heading</p>
            <p className="h6">h6. Bootstrap heading</p>
            <hr />
            <p className="text-primary">.text-primary</p>
            <p className="text-secondary">.text-secondary</p>
            <p className="text-success">.text-success</p>
            <p className="text-danger">.text-danger</p>
            <p className="text-warning">.text-warning</p>
            <p className="text-info">.text-info</p>
            <p className="text-light bg-dark">.text-light</p>
            <p className="text-dark">.text-dark</p>
            <p className="text-muted">.text-muted</p>
            <p className="text-white bg-dark">.text-white</p>
            <hr />
            <ul className="list-unstyled">
                <li>Lorem ipsum dolor sit amet</li>
                <li>Consectetur adipiscing elit</li>
                <li>Integer molestie lorem at massa</li>
                <li>Facilisis in pretium nisl aliquet</li>
                <li>Nulla volutpat aliquam velit
                <ul>
                    <li>Phasellus iaculis neque</li>
                    <li>Purus sodales ultricies</li>
                    <li>Vestibulum laoreet porttitor sem</li>
                    <li>Ac tristique libero volutpat at</li>
                    <ul>
                        <li>Phasellus iaculis neque</li>
                        <li>Purus sodales ultricies</li>
                        <li>Vestibulum laoreet porttitor sem</li>
                        <li>Ac tristique libero volutpat at</li>
                    </ul>
                </ul>
                </li>
                <li>Faucibus porta lacus fringilla vel</li>
                <li>Aenean sit amet erat nunc</li>
                <li>Eget porttitor lorem</li>
            </ul>
        </Container>
    )
};

export default Components;
