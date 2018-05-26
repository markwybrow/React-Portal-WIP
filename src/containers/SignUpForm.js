// import { Button, CheckBox, Input, Select, TextArea } from '../components';

import React, { Component } from 'react';

import Button from '../components/form-elements/Button';
import CheckBox from '../components/form-elements/CheckBox';
import Input from '../components/form-elements/Input';
import Select from '../components/form-elements/Select';
import TextArea from '../components/form-elements/TextArea';

/* import all form elements/components */

class SignUpForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newUser: {
        name: '',
        age: '',
        gender: '',
        skills: [],
        about: ''
      },

      genderOptions: ['Male', 'Female', 'Others'],
      skillOptions: ['Programming', 'Development', 'Design', 'Testing']
    };
    this.handleTextArea = this.handleTextArea.bind(this);
    this.handleAge = this.handleAge.bind(this);
    this.handleFullName = this.handleFullName.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleCheckBox = this.handleCheckBox.bind(this);
    this.handleInput = this.handleInput.bind(this);

    const API_FOR_STUDENT_SIGNUP = `${process.env.REACT_APP_RESTAPI_URL}:${
      process.env.REACT_APP_RESTAPI_PORT
      }/studentSessions`;

    console.log(API_FOR_STUDENT_SIGNUP);
  }

  /* This lifecycle hook gets executed when the component mounts */

  handleFullName(e) {
    let value = e.target.value;
    this.setState(
      prevState => ({
        newUser: {
          ...prevState.newUser,
          name: value
        }
      }),
      () => console.log(this.state.newUser)
    );
  }

  handleAge(e) {
    let value = e.target.value;
    this.setState(
      prevState => ({
        newUser: {
          ...prevState.newUser,
          age: value
        }
      }),
      () => console.log(this.state.newUser)
    );
  }

  handleInput(e) {
    let value = e.target.value;
    let name = e.target.name;
    this.setState(
      prevState => ({
        newUser: {
          ...prevState.newUser,
          [name]: value
        }
      }),
      () => console.log(this.state.newUser)
    );
  }

  handleTextArea(e) {
    console.log('Inside handleTextArea');
    let value = e.target.value;
    this.setState(
      prevState => ({
        newUser: {
          ...prevState.newUser,
          about: value
        }
      }),
      () => console.log(this.state.newUser)
    );
  }

  handleCheckBox(e) {
    const newSelection = e.target.value;
    let newSelectionArray;

    if (this.state.newUser.skills.indexOf(newSelection) > -1) {
      newSelectionArray = this.state.newUser.skills.filter(
        s => s !== newSelection
      );
    } else {
      newSelectionArray = [...this.state.newUser.skills, newSelection];
    }

    this.setState(prevState => ({
      newUser: { ...prevState.newUser, skills: newSelectionArray }
    }));
  }

  handleFormSubmit(e) {
    e.preventDefault();
    let userData = this.state.newUser;

    console.log(
      'Submitting data: ',
      userData,
      '  URL: ',
      this.API_FOR_STUDENT_SIGNUP
    );

    fetch(this.API_FOR_STUDENT_SIGNUP, {
      method: 'POST',
      body: JSON.stringify(userData),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        response.json().then(data => {
          console.log('Successful ' + data);
        });
      })
      .catch(err => {
        console.error(err);
      });
  }

  handleClearForm(e) {
    e.preventDefault();
    this.setState({
      newUser: {
        name: '',
        age: '',
        gender: '',
        skills: [],
        about: ''
      }
    });
  }

  render() {
    const { submitting, handleSubmit } = this.props;

    console.log(this.props);
    return (
      <div className="container">
        <form className="col-span-6" onSubmit={this.handleFormSubmit}>
          <div className="form-group">
            <Input
              type={'text'}
              title={'Full Name'}
              name={'name'}
              style={'pull-left'}
              value={this.state.newUser.name}
              placeholder={'Enter your name'}
              handleChange={this.handleInput}
            />
            {/* Name of the user */}

            <Input
              type={'number'}
              title={'Age'}
              name={'age'}
              value={this.state.newUser.age}
              placeholder={'Enter your Age'}
              handleChange={this.handleInput}
            />
            {/* Input for Age */}

            <Select
              title={'Gender'}
              name={'gender'}
              options={this.state.genderOptions}
              value={this.state.newUser.gender}
              placeholder={'Select Gender'}
              handleChange={this.handleInput}
            />
            {/* Age Selection */}

            <CheckBox
              title={'Skills'}
              name={'skills'}
              style={''}
              options={this.state.skillOptions}
              selectedOptions={this.state.newUser.skills}
              handleChange={this.handleCheckBox}
            />
            {/* Skills/CheckBox */}

            <TextArea
              title={'About you.'}
              rows={10}
              value={this.state.newUser.about}
              name={'currentPetInfo'}
              handleChange={this.handleTextArea}
              placeholder={'Describe your past experience and skills'}
            />
            {/* About you */}

            <Button
              action={this.handleFormSubmit}
              type={'primary'}
              title={'Submit'}
              style={buttonStyle}
            />
            {/*Submit */}

            <Button
              action={this.handleClearForm}
              type={'secondary'}
              title={'Clear'}
              style={buttonStyle}
            />
            {/* Clear the form */}
          </div>
        </form>
      </div>
    );
  }
}

const buttonStyle = {
  margin: '10px 10px 10px 10px'
};

export default SignUpForm;