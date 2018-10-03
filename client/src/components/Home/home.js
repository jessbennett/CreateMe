import React, { Component } from 'react';
import './home.css';
// import '../aos.css';
// import '../aos.js'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    }


  render() {
    return (
      
       <div>
        <section id="portfolio" className="content">
        <h2>What we do</h2>
        <p><strong>CreateME</strong> turns old and dull websites into <strong> beautiful, modern, and interactive applications. </strong> 
        All for a reasonable price. Sign up today, and experience the benefits of creativity and style!</p>
        </section>
        <br/> 
        

{/* fix CSS for Nav Bar,there may be conflicting CSS */}

        <div class ="st-container">  
        
        <input type="radio" name="radio-set" checked="checked" id="st-control-1"/>
	<a href="#st-panel-1">E-Commerance</a>
        
        <input type="radio" name="radio-set" id="st-control-2"/>
	<a href="#st-panel-2">Mobile Apps</a>
        
        <input type="radio" name="radio-set" id="st-control-3"/>
	<a href="#st-panel-3">Digital Marketing</a>

        <input type="radio" name="radio-set" id="st-control-4"/>
	<a href="#st-panel-4">Brand and Logo Design</a>
        
        <input type="radio" name="radio-set" id="st-control-5"/>
	<a href="#st-panel-5">Web Design</a>

       {/* <input type="radio" name="radio-set" id="st-control-5"/>
	<a href="#st-panel-5">Support & Hosting</a> */}
       
  <div class="st-scroll">
  
  <section class="st-panel" id="st-panel-1">
			<div class="st-deco" data-icon="H"></div>
			<h2>E-Commerance</h2>
			<p>Banksy adipisicing eiusmod banh mi sed...</p>
		</section>

  <section class="st-panel" id="st-panel-2">
			<div class="st-deco" data-icon="H"></div>
			<h2>Mobile Apps</h2>
			<p>Banksy adipisicing eiusmod banh mi sed...</p>
		</section>

  <section class="st-panel" id="st-panel-3">
			<div class="st-deco" data-icon="H"></div>
			<h2>Digital Marketing</h2>
			<p>Banksy adipisicing eiusmod banh mi sed...</p>
		</section>

 <section class="st-panel" id="st-panel-4">
			<div class="st-deco" data-icon="H"></div>
			<h2>Brand and Logo Design</h2>
			<p>Banksy adipisicing eiusmod banh mi sed...</p>
		</section>

  <section class="st-panel" id="st-panel-5">
			<div class="st-deco" data-icon="H"></div>
			<h2>Web Design</h2>
			<p>Banksy adipisicing eiusmod banh mi sed...</p>
		</section>   

  {/* <section class="st-panel" id="st-panel-6">
			<div class="st-deco" data-icon="H"></div>
			<h2>Support & Hostin</h2>
			<p>Banksy adipisicing eiusmod banh mi sed...</p>
		</section>  */}

</div>
        
        </div>
        </div>

    
    );
  }
}

export default Home
