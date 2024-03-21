import React, { Component } from 'react';
import './LandingPage.css';
import Header from '../Header/Navbar';

class LandingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
          is_visible: false
        };
      }
      scrollToTop() {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      }
    render(){
    return (
        <div onClick={() => this.scrollToTop()}>
            <Header/>
            <video src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fsharktank.india%2Fvideos%2F2185818911603067%2F&show_text=false&width=560&t=0" width="100%" height="100%" controls="controls" autoplay="true" />
        </div>
    )
    }
}

export default LandingPage;