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
        <div>  
        <section class = "itemsForHomePage">
          <h1 data-aos="fade-up">E-Commerance</h1>
        </section>
        <section class = "itemsForHomePage">
          <h1>Mobile Apps</h1>
        </section>
        <section class = "itemsForHomePage">
          <h1>Digital Marketing</h1>
        </section>
        <section class = "itemsForHomePage">
          <h1>Brand and Logo Design</h1>
        </section>
        <section class = "itemsForHomePage">
          <h1>Web Design</h1>
        </section>
        <section class = "itemsForHomePage">
          <h1>Support & Hosting</h1>
        </section>
        </div>
      </div>
    
/* <script src="https://code.jquery.com/jquery-3.3.1.js"></script>    
<script src="aos.js"></script>
<script type="text/javascript">
  AOS.init({
    offset: 200,
    duration: 1000,
  });
</script> */
    
    );
  }
}

export default Home
