import React, { Component } from 'react';
import './home.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    }


  render() {
    return (
      
       <div>
               {/* I have to give this section a unqnie naming */}
        {/* <section id="portfolio" className="content">
        <h1>What we do</h1>
        <p><strong>CreateME</strong> turns old and dull websites into <strong> beautiful, modern, and interactive applications. </strong> 
        All for a reasonable price. Sign up today, and experience the benefits of creativity and style!</p>
        </section> */}
        <br/> 
        
       
<div class="servicesWithImages">
        <div class="e-commerance">
	<h1>E-Commerance</h1>
        <img src='../../Images/ecommerce-pic22.png' /> 
        
        </div>

<div class="mobileApps">
	<h1>Mobile Apps</h1>
        </div>

<div class="digitalMarketing">		
	<h1>Digital Marketing</h1>	
        </div>

<div class="logoDesign">
	<h1>Brand and Logo Design</h1>
        </div>

<div class="webDesign">
	<h1>Web Design</h1>
	</div>  

<div class="hosting">
	<h1>Support & Hosting</h1>
        </div>  

</div>
        </div>

    
    );
  }
}

export default Home
