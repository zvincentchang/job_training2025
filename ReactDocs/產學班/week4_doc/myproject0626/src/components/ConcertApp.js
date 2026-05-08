import React from 'react';
import ConcertList from './ConcertList';

const ConcertApp = () => {
    const concerts = [
        {
            "version": "1.4",
            "UID": "6407ace173f77c13700a1e86",
            "title": "國際沈文程日 六月二四彼下暗巡迴演唱會",
            "category": "17",
            "showInfo": [
                {
                    "time": "2023/06/24 19:30:00",
                    "location": "台北市信義區信義路五段一號",
                    "locationName": "台北國際會議中心大會堂",
                    "onSales": "Y",
                    "price": "3600、3200、2800、2400、2000、1600、1200",
                    "latitude": "25.0336111",
                    "longitude": "121.5608333",
                    "endTime": "2023/06/24 23:00:00"
                }
            ],
            "showUnit": "",
            "discountInfo": "",
            "descriptionFilterHtml": "",
            "imageUrl": "",
            "masterUnit": [],
            "subUnit": [],
            "supportUnit": [],
            "otherUnit": [],
            "webSales": "https://ticket.com.tw/Application/UTK02/UTK0201_.aspx?PRODUCT_ID=P03NMB2D",
            "sourceWebPromote": "https://ticket.com.tw/Application/UTK02/UTK0201_.aspx?PRODUCT_ID=P03NMB2D",
            "comment": "",
            "editModifyDate": "",
            "sourceWebName": "年代",
            "startDate": "2023/06/24",
            "endDate": "2023/06/24",
            "hitRate": 336
        },
        {
            "version": "1.4",
            "UID": "646bbb3e73f77c07602b8da0",
            "title": "Ailee CONCERT in TAIPEI",
            "category": "17",
            "showInfo": [
                {
                    "time": "2023/07/02 18:30:00",
                    "location": "台北市信義區信義路五段一號",
                    "locationName": "台北國際會議中心大會堂",
                    "onSales": "Y",
                    "price": "4880、3880、2880",
                    "latitude": "25.0336111",
                    "longitude": "121.5608333",
                    "endTime": "2023/07/02 23:59:00"
                }
            ],
            "showUnit": "",
            "discountInfo": "",
            "descriptionFilterHtml": "",
            "imageUrl": "",
            "masterUnit": [],
            "subUnit": [],
            "supportUnit": [],
            "otherUnit": [],
            "webSales": "https://ticket.com.tw/Application/UTK02/UTK0201_.aspx?PRODUCT_ID=P06HRLG3",
            "sourceWebPromote": "https://ticket.com.tw/Application/UTK02/UTK0201_.aspx?PRODUCT_ID=P06HRLG3",
            "comment": "",
            "editModifyDate": "",
            "sourceWebName": "年代",
            "startDate": "2023/07/02",
            "endDate": "2023/07/02",
            "hitRate": 72
        }];

    return (
        <div>
            <ConcertList concerts={concerts} />
        </div>
    );
};

export default ConcertApp;
