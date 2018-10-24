import React, {Component} from 'react';
import './about.css';

class About extends Component {
    
    constructor(props) {
        super(props);
        this.setState = {
            //none
        };
    }
    render() {
        return (
            <div className="row">
  <div>
  <section id="portfolio" className="servicesinfo">
  <h2 className="textHeader">What we do</h2>
  <p className="text"><strong>CreateMe</strong> was designed by seasonal engineers that saw a lack of creativity with large and small business websites. Our mission at CreateMe is to change the way businesses create websites. This means no more over-priced static html web pages, no more dealing with defficult engineer staff and most importantl no more boring content. At <strong>CreateMe</strong> we believe ALL business types should have the oppurtunity to experience quality websites and mobile apps all  at a low cost.</p>
  <br/>
  <br/>
  <h3 className="textHeader">Why choose us?</h3>
  <p className="text">Our Engineering team has over 5 years of professional experience, so our client's know that they will recieve nothing less than the best.</p>
  <br/>
  <br/>
  <h3 className="textHeader">Contact us</h3>
  <p className="text">Found a bug, have a general question, want to make a sugguestion? Feel free to email us at createMeHR@gmail.com</p>
  </section>
  <br/>
</div>
</div>   
  );
 }
}

export default About;