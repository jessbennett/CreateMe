import React, { Component } from 'react';
import './footer.css';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    }
  render() {
    return (
      <div>
        <footer>
            <ul className="social">
                <li><a href="https://www.facebook.com/CreateMe.Software/" ><i className="icon-youtube-play"></i></a></li>
                <li><a href="https://www.facebook.com/CreateMe.Software/" ><i className="icon-facebook"></i></a></li>
            </ul>
        </footer>
      </div>
    );
  }
}

export default Footer