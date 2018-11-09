import React, { Component } from 'react';
import './home.css';
class Home extends Component {
constructor(props) {
super(props);
this.state = {
// No Data Avaible
};
}
render() {
return (
<div>
<div className="sp-container">
{/* <div className="sp-content"> */}
<h2 className="frame-1">Online Stores</h2>
<h2 className="frame-2">Mobile Apps</h2>
<h2 className="frame-3">Web Design</h2>
<h2 className="frame-4">Hosting</h2>
<h2 className="frame-5"><span>CreateMe</span></h2>
{/* </div> */}
</div>
</div>
);
}
}
export default Home