import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ContactForm = () => {
    const [contacts, setContacts] = useState([]);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newContact = {
            id: Date.now(),
            name: name,
            email: email,
            message: message,
        };
        setContacts([...contacts, newContact]);
    };
    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name">姓名:</label>
                    <input
                        type="text"
                        id="name"
                        className="form-control"
                        value={name}
                        onChange={handleNameChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email">電子郵件:</label>
                    <input
                        type="email"
                        id="email"
                        className="form-control"
                        value={email}
                        onChange={handleEmailChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="message">訊息:</label>
                    <textarea
                        id="message"
                        className="form-control"
                        value={message}
                        onChange={handleMessageChange}
                    />
                </div>
                <button type="submit" className="btn btn-primary">送出</button>
            </form>

            {contacts.length > 0 ? (
                <table className="table table-striped mt-3">
                    <thead>
                        <tr>
                            <th scope="col">姓名</th>
                            <th scope="col">電子郵件</th>
                            <th scope="col">訊息</th>
                        </tr>
                    </thead>
                    <tbody>
                        {contacts.map((contact) => (
                            <tr key={contact.id}>
                                <td>{contact.name}</td>
                                <td>{contact.email}</td>
                                <td>{contact.message}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p className="mt-3">目前沒有任何聯絡人。</p>
            )}
        </div>
    );
};

export default ContactForm;

