import React, { Component } from 'react';

class RadioCheckbox extends Component {

    state = {
        gender: 'male',
        like: {
            male: false,
            female: false
        }
    };

    onChangeRadio = (e) => {
        this.setState({
            gender: e.target.value
        })
    };

    onChangeCheckbox = (e) => {
        const key = e.target.value;
        this.setState( (state) => ( {
            like: {
                // 複制原先的 like 物件內容
                ...this.state.like,
                // 針對指定的 like 更新欄位值
                [key] : !state.like[key]
            }
        }));
    };

    render() {
        const { gender, like } = this.state;
        return (
            <div>

                <div>
                    Your gender：
                    <input type="radio" value="male"
                           onChange = {this.onChangeRadio}
                            // radio 透過gender的值來控制是否要選中 checked
                            // 也可透過傳統name='gender'控制單選
                           checked= {gender === 'male' }
                    />
                    <label>Male</label>
                    
                    <input type="radio" value="female" 
                        onChange={this.onChangeRadio}
                        checked= {gender === 'female' }
                    />
                    <label>Female</label>
                    
                    <h3>{gender}</h3>
                </div>

                <div>
                    Your Like：
                    {/* checked={like.male} 可控制預設是否勾選 */}
                    <input type="checkbox" value="male" onChange={this.onChangeCheckbox} checked={like.male}/>
                    <label>Male</label>
                    <input type="checkbox" value="female" onChange={this.onChangeCheckbox} checked={like.female}/>
                    <label>Female</label>
                    <hr/>
                    {/* 
                        參數二(replacer):將指定的欄位刪除
                        參數三(space):JSON欄位縮排空格數
                     */}
                    <pre>{JSON.stringify(this.state, null, 2)}</pre>
                    {/* <pre>{JSON.stringify(this.state, ['gender'], 2)}</pre> */}
                </div>

            </div>
        );
    }
}

export default RadioCheckbox;