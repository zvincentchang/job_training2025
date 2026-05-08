import React, { Component } from 'react';
class FrontEndForm extends Component {
    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleRadioChange = this.handleRadioChange.bind(this);
        this.handleSelectChange = this.handleSelectChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            inputValue: '',
            radioValue: '',
            skills: []
        };
    }
    handleInputChange(e) {
        this.setState({ inputValue: e.target.value.toUpperCase() });
    }
    handleRadioChange(e) {
        this.setState({ radioValue: e.target.value });
    }
    handleSelectChange(e) {
        const { options } = e.target;
        const skills = Object.keys(options)
            .filter(i => options[i].selected === true)
            .map(i => options[i].value);
        this.setState({ skills: skills });
    }
    handleSubmit(e) {
        console.log(this.state);
        e.preventDefault();
    }
    render() {
        const { inputValue, radioValue, skills } = this.state;
        return (
            <form onSubmit={this.handleSubmit} >
                <p>
                    <label>
                        name:
                        <input type="text" value={inputValue}
                            onChange={this.handleInputChange} />
                    </label>
                </p>
                <p>
                    gender
                    <br />
                    <label>
                        male:
                        <input type="radio" value="male" checked={radioValue === 'male'}
                            onChange={this.handleRadioChange} />
                    </label>
                    <label>
                        female:
                        <input type="radio" value="female" checked={radioValue ===
                            'female'}
                            onChange={this.handleRadioChange} />
                    </label>
                </p>
                <p>
                    skills:
                    <select multiple={true} value={skills}
                        onChange={this.handleSelectChange}>
                        <option value="react">react</option>
                        <option value="vuejs">vuejs</option>
                        <option value="angular">angular</option>
                    </select>
                </p>
                <input type="submit" value="submit" />
            </form>
        );
    }
}
export default FrontEndForm;