import React, { Component } from 'react';
import axios from "axios";

const apiUrl = 'http://localhost:8085/training/uploadFileController/uploadFile';

class FileUpload extends Component {

    state = {
        fileName: '',
        imgUrl: ''
    };

    onChangeImg = (event) => {
        // const fileName = event.target.files[0].name;
        this.setState({
            fileName: event.target.files[0].name
        });
    };

    handleSubmit = async (event) => {
        // 防止瀏灠器預設submit跳頁
        event.preventDefault(); 
        const form = event.currentTarget;
        const uploadFile = form.uploadFile.files[0];

        const formData = new FormData();
        formData.append('fileName', this.state.fileName);
        formData.append('uploadFile', uploadFile);

        const imgUrl = await axios.post(apiUrl, formData)
        .then(rs => rs.data)
        .catch(error => {console.log("error:", error);} )

        this.setState({
            imgUrl: imgUrl
        });

    };

    render() {
        const { fileName, imgUrl } = this.state;
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type='file' name='uploadFile' onChange={this.onChangeImg}/>
                    <button type='submit'>上傳</button>
                </form>
                <h3>{fileName}</h3>
                <hr/>
                <h3>{imgUrl}</h3>
                <img src={imgUrl}/>

            </div>
        );
    }
}

export default FileUpload;