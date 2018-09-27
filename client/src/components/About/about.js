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
          <div class= "aboutUsContent">
            <h1>Who We Are</h1>
            <br/>
        
        <div className="whatWeDo">
            <h4> Our mission at CreateMe is that we do our best to give our customers the best wesbite or application for a fair price while still providing our clients with the lastest technologies, best practices and techniques. All for an afforable price.</h4>
        </div>




            </div>
        )
    
}
}

export default About;