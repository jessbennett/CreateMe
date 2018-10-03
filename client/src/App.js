import React, { Component } from 'react'
import './App.css'
import ContactForm from './components/ContactForm/contactform';
import Home from './components/Home/home';
import About from './components/About/about';
import Services from './components/Services/services';
import Footer from './components/Footer/footer';
import history from './history';

// For routing
const Link = (props) => {
  const onClick = (e) => {
      const aNewTab = e.metaKey || e.ctrlKey;
      const anExternalLink = props.href.startsWith('http');
      if (!aNewTab && !anExternalLink) {
          e.preventDefault();
          history.push(props.href);
      }
  };
  return (
      <a href={props.href} onClick={onClick}>
          {props.children}
      </a>
  );
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      mainContent: <Home/>,
  };
  this.setMainHome = this.setMainHome.bind(this);
  this.setMainUploadContactForm = this.setMainUploadContactForm.bind(this);
  this.setAboutPage = this.setAboutPage.bind(this);
  this.setServicesPage = this.setServicesPage.bind(this);
}
componentDidMount () {
  const urlHandler = (currentURL) => {
    switch (currentURL.toLowerCase()) {
      case '':
          this.setState({mainContent: <Home/>})
          break;
      case 'about':
          this.setState({mainContent: <About/>})
          break;
      case 'services':
          this.setState({mainContent: <Services/>})
          break;
      case 'contact':
          this.setState({mainContent: <ContactForm/>})
          break;
      default:
          this.setState({mainContent: <Home/>})
    }
  }
  const url = window.location.href.substring(window.location.href.lastIndexOf('/')+1, window.location.href.length)
  urlHandler(url);
  this._isMounted = true;
  window.onpopstate = () => {
    if(this._isMounted) {
      const urlPath = window.location.href.substring(window.location.href.lastIndexOf('/')+1, window.location.href.length)
      urlHandler(urlPath)
    }
  }
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
              <Link href = '/Home'><li onClick={this.setMainHome}><a href="Home"><i className="icon-home"></i>Home</a></li></Link>
              <Link href = '/Contact'><li onClick={this.setMainUploadContactForm}><a href="Contact"><i className=" "></i>Contact</a></li></Link>
              <Link href = '/About'><li onClick={this.setAboutPage}><a href="About"><i className=" "></i>About</a></li></Link>
              <Link href = '/Services'><li onClick={this.setServicesPage}><a href="Services"><i className=" "></i>Services</a></li></Link>
            </ul>
          </nav>
          </section>
        </header>
          <h1>{this.state.test}</h1>
          {this.state.mainContent}
          <br/>
          <br/>
        {/* <Footer/> */}
        </div>
    )
  }
}

export default App;
