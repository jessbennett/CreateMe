import React, { Component } from 'react';
import './contactform.css';

    
// Create component for label
class Label extends Component {
  render() {
    if (this.props.hasLabel === 'true') {
      return <label htmlFor={this.props.htmlFor}>{this.props.label}</label>
    }
  }
}

class Textarea extends Component {
  render() {
    return (
      <fieldset>
        <Label
          hasLabel={this.props.hasLabel}
          htmlFor={this.props.htmlFor}
          label={this.props.label}
          className={this.props.className}
          icon={this.props.icon}
        />

        <textarea
          cols={this.props.cols || ''}
          name={this.props.name || ''}
          required={this.props.required || ''}
          rows={this.props.rows || ''}
          value = {this.props.textarea}
          onChange={this.props.onChange || ''}
          className={this.props.className}
        >
        </textarea>
      </fieldset>
    );
  }
};

// Create component for input
class Input extends Component {
  render() {
    return (
      <fieldset>
        <Label
          hasLabel={this.props.hasLabel}
          htmlFor={this.props.htmlFor}
          label={this.props.label}
        />

        <input
          id={this.props.htmlFor}
          max={this.props.max || ''}
          min={this.props.min || ''}
          name={this.props.name || ''}
          placeholder={this.props.placeholder || ''}
          required={this.props.required || ''}
          step={this.props.step || ''}
          type={this.props.type || 'text'}
          onChange={this.props.onChange || ''}
        />
      </fieldset>
    );
  }
}


class contactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      textarea: '',
      description:''
    };
  }

  handleFirstNameChange(e) {
    this.setState({firstName: e.target.value})
  }
  handleLastNameChange(e) {
      this.setState({lastName: e.target.value})
  }
  handleLEmailChange(e) {
    this.setState({email: e.target.value})
  }
  handleTextChange(e) {
    this.setState({textarea: e.target.value})
  }
  handleDescriptionChange(e) {
    this.setState({description: e.target.value})
  }

  async uploadForm(e) {
    const url = '/api/uploadContactForm';
    alert(JSON.stringify(this.state))
    const dataObj = {
      firstname: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      textarea: this.state.textarea,
      description: this.state.description
    }
    const requestObject = {
      method: "POST", 
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {

        'content-type': 'application/json; charset=UTF-8'
      },
      body: JSON.stringify(dataObj),
    }
    const responseFromServer = await fetch(url, requestObject);
    console.log(responseFromServer)
  }

  render() {
    return (
      <div className="flextape">
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800" rel="stylesheet"></link>
        <link href="https://netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css" rel="stylesheet"></link>

        <div className='formHeader'>
          <h1 className='formHeaderText'> Complete Form </h1>
        </div>
        <div className="flextape">
        
        <div className='formHeaderMobile'>
          <h1> Complete Form</h1>
        </div>
        <div className='uploadContactForm'>
        <form>
          <br/>
  <p className="text"><strong>Complete Our Contact Form and We will respond ASAP or Call Us at (561) 856-1307 for a FREE Qoute</strong></p>
  <br/>
  
<Input
          hasLabel='true'
          htmlFor='textInput'
          label=' First Name'
          required='true'
          type='text'
          onChange={(e)=>this.handleFirstNameChange(e)}  />
          <br/>
          
          <Input
          hasLabel='true'
          htmlFor='textInput'
          label='Last Name'
          required='true'
          type='text'
          onChange={(e)=>this.handleLastNameChange(e)}  />
          <br/>

        <Input
          hasLabel='true'
          htmlFor='textInput'
          label='Email'
          required='true'
          type='text'
          onChange={(e)=>this.handleLEmailChange(e)}/>
          <br/>
        
        <Input
          hasLabel='true'
          htmlFor='textInput'
          label='If updating exsiting website, Please provide current URL'
          required='true'
          type='text'
          onChange={(e)=>this.handleTextChange(e)} />
        <br/>
       
        <div className="description">
        <Textarea 
          hasLabel='true'
          htmlFor='textInput'
          label='Breif description of what you want'
          required='true'
          type='text'
          onChange={(e)=>this.handleDescriptionChange(e)}/>
         <br/>
         </div>
  
          <button className="submitButton" 
            type="submit" 
            onClick={(e)=>this.uploadForm(e)}
            >Upload Form</button>
        </form>
        </div>
        
      </div>
        </div>
    )
  }
}



export default contactForm; 