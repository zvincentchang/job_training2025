import React, { Component } from 'react';
import axios from "axios";

const apiUrl = 'http://localhost:8085/training/uploadFileController/uploadFile';

class FileUpload extends Component {

    state = {
        fileName: '',
        imgUrl: ''
    };

    onChangeImg = (e) => {
        const changFile = e.target.files;        
        const changFileName = changFile[0].name;        
        this.setState({fileName: changFileName});
    };

    handleSubmit = async(event) => {
        event.preventDefault(); // 防止瀏灠器預設submit跳頁
        const form = event.currentTarget;
        const uploadFile = form.uploadFile.files[0];
        // multipart
        const formData = new FormData();
        formData.append('fileName', this.state.fileName);
        formData.append('uploadFile', uploadFile);
        // call 後端API上傳檔案
        const imgUrl = await axios.post(apiUrl, formData, { timeout: 3000 })
        .then(rs => rs.data)
        .catch(error => { console.log(error); });

        this.setState({imgUrl: imgUrl});
    };

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="file" name='uploadFile' onChange={this.onChangeImg}/>                    
                    <button type="submit">上傳</button>
                </form>
                <h3>{this.state.fileName}</h3>

                <hr/>

                <h3>{this.state.imgUrl}</h3>
                <img src={this.state.imgUrl}/>
            </div>
        );
    }
}

export default FileUpload;