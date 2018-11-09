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
<section id="portfolio" className="servicesInfo">
<h2 className="textHeader">E-Commerce</h2>
<p className="text"><strong>E-Commerce</strong>, is online shopping as we commonly know it. Typically, we create our online shopping sites in PHP and JavaScript or we may use website builders such as; WIX and WordPress.</p> <br/>
<br/>
<h3 className="textHeader">Mobile Apps</h3>
<p className="text">A <strong>mobile app</strong> is a software program you can download and access directly using your phone or another mobile device. We build mobile apps as a cross platform; meaning applications are built with the capability of running on IOS and Android</p> <br/>
<br/>
<h3 className="textHeader">Digital Marketing</h3>
<p className="text">For our <strong>Digital Marketing</strong> services, we monitor things like what is being viewed, optimizing search engine support, sales conversions, what content works and doesn’t work, etc. This is ideal for e-commerce and sales</p> <br/>
<br/>
<h3 className="textHeader">Brand and Logo Design</h3>
<p className="text">Your <strong>logo design</strong> identifies your business in its simplest form using a logo mark, typographic solution, or combination of both</p>
<br/>
<br/>
<h3 className="textHeader">Web Design</h3>
<p className="text"> <strong>Web Design</strong> is the process of collecting ideas, and aesthetically arranging and implementing them, guided by certain principles for a specific purpose. Web Design includes-Layout, Color, Graphics, Fonts, and Content which are all important for desktop and mobile applications</p>
<br/>
<br/>
<h3 className="textHeader">Support & Hosting</h3>
<p className="text"> <strong>Web hosting </strong> is the service that makes your website available to be viewed by others on the Internet. A web host provides space on its server, so that other computers around the world can access your website by means of a network or modem. Website hosting is REQUIRED if you want others to access your site</p>
<br/>
<br/>
</section>
<br/>
</div>
)
}
}
export default Services;