import React, {Component} from 'react';
import './services.css';

class Services extends Component {
    //TODO: SET THIS UP TO DISPLAY TEXT ABOUT THE COMPANY 
    constructor(props) {
        super(props);
        this.setState = {
            
        };
    }
    
    
    render() {
        return (
          <div>
              <h1><span> Services </span></h1>
            
              <div className = "listOfServices">
                  <h3>E-Commerance</h3>
                  <h5>Simply put, it is online shopping as we commonly know it.</h5>
                  <br/>
              </div>
            <div className = "listOfServices">
                  <h3>Mobile Apps</h3>
                  <h5>A mobile app is a software program you can download and access directly using your phone or another mobile device. We build mobile apps as a cross platform; meaning applications are built with the capability of running on IOS and Andriod.</h5>
                  <br/>
              </div>
            <div className = "listOfServices">
                  <h3> Digital Marketing</h3>
                  <h5> We monitor things like what is being viewed, how often and for how long, sales conversions, what content works and doesn’t work, etc. This is ideal for e-commerance and sales.</h5>
                  <br/>
              </div>
            <div className = "listOfServices">
                  <h3>Brand and Logo Design</h3>
                  <h5>Your logo design identifies your business in its simplest form using a logo mark, typographic solution, or combination of both.</h5>
                  <br/>
                </div>
            <div className = "listOfServices">
                  <h3>Web Design</h3>
                  <h5>Design is the process of collecting ideas, and aesthetically arranging and implementing them, guided by certain principles for a specific purpose. Web Design includes-Layout, Color, Graphics, Fonts, and Content which are all important for desktop and mobile applications.</h5>
                  <br/>
                </div>
            <div className = "listOfServices">
                  <h3>Support & Hosting</h3>
                  <h5>Web hosting is the service that makes your website available to be viewed by others on the Internet. A web host provides space on its server, so that other computers around the world can access your website by means of a network or modem. Website hosting is REQUIRED if you want others to access your site.</h5>
                  <br/>
              </div>
            </div>
        )
    
}

}

export default Services;