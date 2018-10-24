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
        
       
        <div className="sp-container">
	
        <div className="sp-content">
		<div className="sp-globe"></div>
		<h2 className="frame-1">E-commerance</h2>
		<h2 className="frame-2">Mobile Apps</h2>
		<h2 className="frame-3">Web Design</h2>
		<h2 className="frame-4">Support & Hosting</h2>
		<h2 className="frame-5">
			<span>CreateMe</span>
		</h2>
	</div>
</div>
        </div>

    
    );
  }
}

export default Home
