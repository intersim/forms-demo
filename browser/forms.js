import React, { Component } from 'react';

// Form
// FormContainer/FormDecorator

const Form = (props) => {
  const handleChange = props.handleChange;
  const handleSubmit = props.handleSubmit;
  const inputValue = props.inputValue;

  // TO-DO
  return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleChange}
          value={inputValue}
        />
        <button type="submit" className="btn btn-outline">Submit</button>
      </form>
  );
}

class FormContainer extends Component {
  constructor (props) {
    super(props);
    this.state = {
      inputValue: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange (evt) {
    const value = evt.target.value;
    console.log(value);
    this.setState({
      inputValue: value
    });
  }

  handleSubmit (evt) {
    evt.preventDefault();
    console.log(evt);
    // ??? TO-DO
  }

  render () {
  	const inputValue = this.state.inputValue;
    return (
      <Form
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        inputValue={inputValue}
      />
    );
  }
}

export default FormContainer;