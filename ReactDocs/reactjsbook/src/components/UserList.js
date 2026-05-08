import React, {Component} from 'react';
import 'isomorphic-fetch';//isomorphic-fetch需要用npm安装
import {Button} from 'react-bootstrap';//react-bootstrap需要用npm安装
export default class userList extends Component {
    constructor() {
        super();
        this.state = {}
    }
    async componentDidMount() {
        let users = await (await fetch(`/api/users`)).json();//从Spring Boot后端获取JSON数据
        this.setState({users});
    }
    render() {
        let {users = []} = this.state;
        return (
            <div>
                <table className='table' border="1">
                    <thead>
                    <tr>
                        <th>id</th>
                        <th>姓名</th>
                        <th>年龄</th>
                        <th>电话</th>
                        <th>邮箱</th>
                        <th>职位</th>
                        <th>编辑</th>
                    </tr>
                    </thead>
                    <tbody>
                    {users.map(({uid, name, age, telephone, job, email}) =>
                        <tr key={uid}>
                            <td>{uid}</td>
                            <td>{name}</td>
                            <td>{age}</td>
                            <td>{telephone}</td>
                            <td>{email}</td>
                            <td>{job}</td>
                            <td><Button onClick = {() => {
                                this.setState({users});
                                alert("welcome")
                            }}>配置</Button></td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        );
    }
}
 