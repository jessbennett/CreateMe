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
    <div className="notHidden">
      <a href={props.href} onClick={onClick}>
          {props.children}
      </a>
    </div>
  );
};


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      mainContent: ' ',
      showOrHideNav: 'hidden',
      ignoreClick: true
  };
  this.setMainHome = this.setMainHome.bind(this);
  this.setMainUploadContactForm = this.setMainUploadContactForm.bind(this);
  this.setAboutPage = this.setAboutPage.bind(this);
  this.setServicesPage = this.setServicesPage.bind(this);
  this.showOrHideNav = this.showOrHideNav.bind(this);
  this.hideNav = this.hideNav.bind(this);
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
showOrHideNav(){

  if (this.state.showOrHideNav === "navPopup") this.setState({showOrHideNav:"hidden", ignoreClick: true})
  else this.setState({showOrHideNav:"navPopup", ignoreClick: false})
}
  hideNav(){
    if (this.showOrHideNav !== "hidden" && this.state.ignoreClick === false) this.setState({showOrHideNav: "hidden", ignoreClick: true})
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
        <div className="home" onClick={this.hideNav}>
          <h1 className='homeMainTitle'>
            <span>
              Let Us Create Something New.
            </span>
          </h1>
        <header className='homeHeader'>
          <section>
          <a href="/Home" onClick={this.setMainHome} id="logo">         
          <strong>       
          CreateME
          </strong>
            </a>
            <label htmlFor="toggle-1" className="toggle-menu" onClick={this.showOrHideNav}>
              <ul>
                <li ></li>
                <li ></li>
                <li ></li>
              </ul>
            </label>

          <nav className = {this.state.showOrHideNav} onClick={this.showOrHideNav}>            
          <ul>
              <Link href = '/Home'><li onClick={this.setMainHome}><div><i className="icon-home"></i>Home</div></li></Link>
              <Link href = '/Contact'><li onClick={this.setMainUploadContactForm}><div><i className="icon-phone"></i>Contact</div></li></Link>
              <Link href = '/About'><li onClick={this.setAboutPage}><div><i className="icon-info"></i>About</div></li></Link>
              <Link href = '/Services'><li onClick={this.setServicesPage}><div><i className="icon-desktop"></i>Services</div></li></Link>
            </ul>
          </nav>
          </section>
        </header>
          {this.state.mainContent}
          <br/>
          <br/>

        <Footer/>
        </div>
    )
  }
}

export default App;
