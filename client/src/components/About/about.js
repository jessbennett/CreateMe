import React, {Component} from 'react';
import './about.css';

class About extends Component {
    //TODO: SET THIS UP TO DISPLAY TEXT ABOUT THE COMPANY 
    constructor(props) {
        super(props);
        this.setState = {
            //set state equal to objects
        };
    }
    render() {
        return (
            <div class="row">
            <div class="containers col-lg-6 col-md-6">
              
              <div class="pic"></div>
              
              <div class="box1"></div>
              <div class="box2"></div>
              
              <div class="social1">
                <i class="fa fa-facebook" aria-hidden="true"></i> 
              </div>
              <div class="social2">
              <i class="fa fa-dribbble" aria-hidden="true"></i>
              </div>
              <div class="social3">
                <i class="fa fa-codepen" aria-hidden="true"></i>
              </div>
            </div>
            
            <div class="aboutUs">
              
              <h1 class="contentHead">ABOUT US</h1>
              
              <p class="newCustomer">Hello New Customer, <br/><br/>
                CreateMe was hard coded and designed by experienced software engineers that saw a lack of creativity with small business websites. 
                Simply because small bussinesses are usually on a tight budget. At CreateMe, we believe that 
                ALL business types should have the oppurtunity to experience quality websites or mobile apps at a low cost. 
                The developers on our team have over 5 years experience in software development and customer service, 
                so you know you won't recieve anything less than the best.
            <br/>
                <br/>
                So go ahead and fill out that contact form and experience true customer service <span>&hearts;</span>
                <br/><br/>
             
              </p>
            </div>
           </div>   
        )
    
}
}

export default About;