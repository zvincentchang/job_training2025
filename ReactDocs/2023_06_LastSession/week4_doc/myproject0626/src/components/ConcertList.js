import React from 'react';
import { Container, Table, Button } from 'react-bootstrap';

const ConcertList = ({ concerts }) => {
    return (
        <Container>
            <h1>演唱會列表</h1>
            <Table striped bordered>
                <thead>
                    <tr>
                        <th>演唱會名稱</th>
                        <th>演出日期</th>
                        <th>地點</th>
                        <th>票價</th>
                        <th>購票連結</th>
                    </tr>
                </thead>
                <tbody>
                    {concerts.map((concert) => (
                        <tr key={concert.UID}>
                            <td>{concert.title}</td>
                            <td>{concert.showInfo[0].time}</td>
                            <td>{concert.showInfo[0].location}</td>
                            <td>{concert.showInfo[0].price}</td>
                            <td>
                                <Button variant="primary" href={concert.webSales} target="_blank">
                                    購票
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
};

export default ConcertList;
