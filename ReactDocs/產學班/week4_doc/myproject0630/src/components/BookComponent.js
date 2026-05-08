import React from 'react'
import APIService from './APIService';
export default class BookComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            books: []
        }
    }
    componentDidMount() {
        APIService.getBooks().then((rs) => {
            this.setState({ books: rs.data })
            console.log(this.state.books);
        })
            .catch(function (ex) {
                console.log('Response parsing failed. Error: ', ex);
            });;
    }
    render() {
        return (
            <div className='container'>
                <h2 className="text-center">Book Details</h2>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Book Id</th>
                            <th>Book Name</th>
                            <th>Book Author</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.books.map(book =>
                                <tr key={book.id}>
                                    <td>{book.id}</td>
                                    <td>{book.bookName}</td>
                                    <td>{book.author}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}