import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardImg from './CardImg.svg';
import CardDeck from 'react-bootstrap/CardDeck';
import iPhoneImg1 from './img/iPhone12_256G.jpg';
import iPhoneImg2 from './img/iPhoneMini12_256G.jpg';
import iPhoneImg3 from './img/iPhonePro12_256G.jpg';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Col from 'react-bootstrap/Col'
import axios from "axios";
import Modal from 'react-bootstrap/Modal';


const Components = () => {

    const [validated, setValidated] = useState(false);

    // 建立表單資料參數更新state
    // 1.透過更新React state就可以傳遞給其它的組件使用
    // 2.透過設置state欄位預設值控制DOM元素預設值呈現
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

    const [formParam, setFormParam] = useState({
        email: '', password: '', address: '', city: '', state: 1, zip: '', radio: '', checkbox: ['One', 'Two'],
        date: dateText, time: dateTime, dateTimeLocal: dateTimeLocalText, fileName: ''
    });


    const onChangeEmail = (e) => {
        setFormParam(
            p => {
                const emailVal = e.target.value;
                return ({
                    ...p,
                    email: emailVal
                })
            }
        )
    };

    const onChangePassword = (e) => { setFormParam(p => ({ ...p, password: e.target.value })) };

    const onChangeAddr = (e) => { setFormParam(p => ({ ...p, address: e.target.value })) };

    const onChangeCity = (e) => { setFormParam(p => ({ ...p, city: e.target.value })) };

    // 取到的值預設字串型別可以自行轉數字型別
    const onChangeState = (e) => { setFormParam(p => ({ ...p, state: parseInt(e.target.value) })) };

    const onChangeZip = (e) => { setFormParam(p => ({ ...p, zip: e.target.value })) };

    const onChangeRadio = (e) => { setFormParam(p => ({ ...p, radio: e.target.value })) };

    const onChangeCheckbox = (e) => {
        setFormParam(p => {
            let newCheckboxs = [];
            if (e.target.checked === true) {
                // 有勾選(加入清單)
                newCheckboxs = [...p.checkbox, e.target.value];
            } else {
                // 沒有勾選(從清單中移除)
                newCheckboxs = p.checkbox.filter(elem => elem !== e.target.value);
            }
            return { ...p, checkbox: newCheckboxs }
        })
    };

    // 透過指定欄位名的方式,就可以不必為每個欄位都撰寫onChange函式
    const onChangeDateField = (e, fieldName) => { setFormParam(p => ({ ...p, [fieldName]: e.target.value })) };

    // 瀏灠檔案上傳欄位
    const onChangeFile = (e) => {
        const changFile = e.target.files;
        const changFileName = changFile.length === 0 ? '' : changFile[0].name;
        setFormParam(p => ({ ...p, fileName: changFileName }))
    };

    const apiUrl = 'http://localhost:8085/training/uploadFileController/reactBootstrapForm';

    const handleSubmit = async (event) => {
        event.preventDefault(); // 防止瀏灠器預設submit跳頁
        // 使用者送出開啟表單欄位驗証功能
        setValidated(true);
        const form = event.currentTarget;
        console.log("form.checkValidity():", form.checkValidity());
        if (form.checkValidity() === true) {
            console.log("form.email.value:", form.email.value); // 從表單取欄位值(name="xxx")
            console.log("formParam.email:", formParam.email); // 從state中取得(state欄位名)


            const formData = new FormData();
            Object.keys(formParam).map(key => {
                const value = formParam[key];
                formData.append(key, value);
            });
            formData.append('uploadFile', form.uploadFile.files[0]);

            const formResponse = await axios.post(apiUrl, formData, { timeout: 300000 }).then(rs => rs.data)
            console.log(formResponse);
        }

    };

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <Container>
            <Button variant="outline-primary">Primary</Button>
            <Button variant="outline-secondary">Secondary</Button>
            <Button variant="outline-success">Success</Button>
            <Button variant="outline-warning">Warning</Button>
            <Button variant="outline-danger">Danger</Button>
            <Button variant="outline-info">Info</Button>
            <Button variant="outline-light">Light</Button>
            <Button variant="outline-dark">Dark</Button>

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
            <Form noValidate validated={validated} onSubmit={handleSubmit}>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control required type="email" placeholder="請輸入電子郵件(客官要填喔 T..T )" name='email' onChange={onChangeEmail} />
                        <Form.Control.Feedback>email格式正確!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">email格式錯誤!</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control required type="password" placeholder="Password" onChange={onChangePassword} />
                        <Form.Control.Feedback>欄位正確!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">欄位錯誤!</Form.Control.Feedback>
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridAddress1">
                        <Form.Label>Address</Form.Label>
                        <Form.Control required type="text" placeholder="1234 Main St" value={formParam.address} onChange={onChangeAddr} />
                        <Form.Control.Feedback>欄位正確!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">欄位錯誤!</Form.Control.Feedback>
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control required type="text" placeholder="City" onChange={onChangeCity} />
                        <Form.Control.Feedback>欄位正確!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">欄位錯誤!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>State</Form.Label>
                        {/* React Bootstrap下拉選單透過 defaultValue 屬性決定預設值選項,且不行透過傳統 selected 屬姓設置 */}
                        <Form.Control required as="select" defaultValue={formParam.state} onChange={onChangeState}>
                            <option value={''}>請選擇</option>
                            <option value={1}>狗民黨:吼友疑</option>
                            <option value={2}>明進黨:懶清得</option>
                            <option value={3}>明重黨:柯聞折</option>
                            <option value={4}>無黨級:李昱賞</option>
                        </Form.Control>
                        <Form.Control.Feedback>欄位正確!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">欄位錯誤!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Zip</Form.Label>
                        <Form.Control required type="number" step="any" placeholder="Zip" min={100} onChange={onChangeZip} />
                        <Form.Control.Feedback>欄位正確!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">欄位錯誤!</Form.Control.Feedback>
                    </Form.Group>
                </Form.Row>

                <Form.Group id="formGridRadio">
                    <Form.Check inline required name='radioName' type="radio" label="RadioOne"
                        value={'One'} onChange={onChangeRadio} checked={formParam.radio === 'One'} />
                    <Form.Check inline required name='radioName' type="radio" label="RadioTwo"
                        value={'Two'} onChange={onChangeRadio} checked={formParam.radio === 'Two'} />
                    <Form.Check inline required name='radioName' type="radio" label="RadioThree"
                        value={'Three'} onChange={onChangeRadio} checked={formParam.radio === 'Three'} />
                </Form.Group>

                <Form.Group id="formGridCheckbox">
                    {/* checkbox不會指定全部選項必選 */}
                    <Form.Check inline required type="checkbox" label="CheckboxOne"
                        value={'One'} onChange={onChangeCheckbox} checked={formParam.checkbox.includes('One')} />
                    <Form.Check inline type="checkbox" label="CheckboxTwo"
                        value={'Two'} onChange={onChangeCheckbox} checked={formParam.checkbox.includes('Two')} />
                    <Form.Check inline type="checkbox" label="CheckboxThree"
                        value={'Three'} onChange={onChangeCheckbox} checked={formParam.checkbox.includes('Three')} />
                </Form.Group>

                <Form.Row>
                    <Form.Group as={Col} controlId="formDate">
                        <Form.Label>Date</Form.Label>
                        <Form.Control required type="date" name='date_of_birth' value={formParam.date}
                            onChange={(e) => onChangeDateField(e, 'date')} />
                        <Form.Control.Feedback>欄位正確!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">欄位錯誤!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formTime">
                        <Form.Label>Time</Form.Label>
                        <Form.Control required type="time" name='date_of_time' value={formParam.time}
                            onChange={(e) => onChangeDateField(e, 'time')} />
                        <Form.Control.Feedback>欄位正確!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">欄位錯誤!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formDatetimeLocal">
                        <Form.Label>Datetime-local</Form.Label>
                        <Form.Control required type="Datetime-local" name='date_of_dateTime'
                            value={formParam.dateTimeLocal} onChange={(e) => onChangeDateField(e, 'dateTimeLocal')} />
                        <Form.Control.Feedback>欄位正確!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">欄位錯誤!</Form.Control.Feedback>
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} xs={6}>
                        <Form.File id="formcheck-api-custom" custom>
                            <Form.File.Input required name="uploadFile" onChange={onChangeFile} />
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
            <pre>{JSON.stringify(formParam, null, 3)}</pre>

            <br /><br /><br />
            <hr />


            <Button variant="primary" onClick={handleShow}>
                Launch static backdrop modal
            </Button>

            {/* 
                backdrop設置為static時,在其外部點擊時Modal將不會關閉
            */}
            <Modal show={show} onHide={handleClose} backdrop="static">
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


        </Container>
    );
};

export default Components;
