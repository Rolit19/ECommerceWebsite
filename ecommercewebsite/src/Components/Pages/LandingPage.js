import React, { Component } from 'react';
import './LandingPage.css';
import "../Carousel/CardCarousel.css"
import IntroImg from "../Assets/Images/landingImage.jpeg"
import IntroVedio from "../Assets/Vedios/MainVedio.mp4"
import SharkTankImg from "../Assets/Images/SharkTank.png"
import Header from '../Header/Navbar';
import CardCarousel from '../Carousel/CardCarousel';
import MarqueeComponent from '../Carousel/Marquee';
import CollectionTable from '../Products/CollectionTable';
import SaleMarqueeComponent from '../Carousel/SaleMarquee';
import HighlightProduct from '../Products/HighlightProduct';

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
            <SaleMarqueeComponent className="SaleMarquee"/>
            <Header/>
            <video playsinline="playsinline" autoplay="true" loop="true" muted="true" src={IntroVedio} type="video/mp4" className='LandingIntroVedio'/>
            <hr style={{
                color: "#e9e9e9",
                background: "#e9e9e9",
                backgroundColor: "#e9e9e9",
                height: '1px',}} />
            <img src={SharkTankImg} alt='SharkTankImg' className='SharkTankImage' />
            <CardCarousel/>
            <MarqueeComponent/>
            <p class="Carousal-heading">Our Collection</p>
            <CollectionTable/>
            <p class="Carousal-heading">Most loved product of the month</p>
            <HighlightProduct/>
        </div>
    )
    }
}

export default LandingPage;