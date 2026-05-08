import React, { Component } from 'react';

class RadioCheckbox extends Component {

    state = {
        gender: '柯',
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
        this.setState( state => ({
            like: {
                ...state.like,
                [key]: !state.like[key]
            }   
        }));
    }

    render() {

        const { gender, like } = this.state;

        return (
            <div>
               <input type='radio' value={'候'}               
                    checked={gender == '候'}
                    onChange={this.onChangeRadio}
                />
               <label>候</label>

               <input type='radio' value={'柯'}
                    checked={gender == '柯'}
                    onChange={this.onChangeRadio}
               />
               <label>柯</label>

               <input type='radio' value={'賴'}
                    checked={gender == '賴'}
                    onChange={this.onChangeRadio}
               />
               <label>賴</label>
               <h3>{gender}</h3>

                <hr/>
                Your Like：
                {/* checked={like.male} 可控制預設是否勾選 */}
                <input type="checkbox" value="male" onChange={this.onChangeCheckbox} checked={like.male}/>
                <label>Male</label>
                <input type="checkbox" value="female" onChange={this.onChangeCheckbox} checked={like.female}/>
                <label>Female</label>

                <pre>{JSON.stringify(this.state, null, 2)}</pre>
            </div>
        );
    }
}

export default RadioCheckbox;