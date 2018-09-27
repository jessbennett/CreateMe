import React, { Component } from 'react'
import './App.css'
import ContactForm from './components/ContactForm/contactform';
import Home from './components/Home/home';
import About from './components/About/about';
import Services from './components/Services/services';
import Footer from './components/Footer/footer';
import superState from './superState';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      test: superState.test,
      mainContent: <Home/>,
  };
}

setSuperState(){
  this.setState({test: superState.test})
}

setAboutPage() {
  this.setState({mainContent: <About/>})
}

setServicesPage() {
  this.setState({mainContent: <Services/>})
}

  setMainUploadContactForm() {
    this.setState({mainContent: <ContactForm/>})
  }
  
  setMainHome(e){
    e.preventDefault();
    this.setState({mainContent: <Home/>})
  }
  
  render () {
    return (
        <div className="home">
          <h1 className='homeMainTitle'>
            <span>
              {/* Change into slogan */}
              Let Us Create Something New.
            </span>
          </h1>
        <header class='homeHeader'>
          <section>
            <a href=" " id="logo">
                CreateME
            </a>
            <label htmlFor="toggle-1" class="toggle-menu">
              <ul>
                <li ></li>
                <li ></li>
                <li ></li>
              </ul>
            </label>
            <input type="checkbox" id="toggle-1"/>

          <nav>
            <ul>
              <li onClick={this.setMainHome.bind(this)}><a href="#Home"><i className="icon-home"></i>Home</a></li>
              <li onClick={this.setMainUploadContactForm.bind(this)}><a href="#contact"><i className=" "></i>Contact</a></li>
              <li onClick={this.setAboutPage.bind(this)}><a href="#About"><i className=" "></i>About</a></li>
              <li onClick={this.setServicesPage.bind(this)}><a href="#Services"><i className=" "></i>Services</a></li>
            </ul>
          </nav>
          </section>
        </header>
          <h1>{this.state.test}</h1>
          {this.state.mainContent}
          <br/>
          <br/>
        <Footer/>
        </div>
    )
  }
}

export default App;
