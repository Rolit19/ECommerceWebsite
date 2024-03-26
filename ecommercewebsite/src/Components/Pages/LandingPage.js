import React, { Component } from 'react';
import './LandingPage.css';
import IntroImg from "../Assets/Images/landingImage.jpeg"
import SharkTankImg from "../Assets/Images/SharkTank.png"
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
            <img src={IntroImg} alt='IntroImg' className='LandingIntroImage'/>
            <hr style={{
                color: '#F0F1F0',
                height: '1px',}} />
            <img src={SharkTankImg} alt='SharkTankImg' className='SharkTankImage' />
        </div>
    )
    }
}

export default LandingPage;