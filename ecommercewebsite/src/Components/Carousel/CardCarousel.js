import React from "react";
import './CardCarousel.css'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import img1 from "../Assets/Images/pic-1.jpeg";
import img2 from "../Assets/Images/pic-2.jpeg";
import img3 from "../Assets/Images/pic-3.jpeg";
import img4 from "../Assets/Images/pic-4.jpeg";
import img5 from "../Assets/Images/pic-5.jpeg";

const CardCarousel = () => {
    const CardData = [
        {
            name: "LACE Base Faux Scalp™ – Hair Topper 2x6inch",
            price: "Rs 6,999"
        },
        {
            name: "Hair Topper For Short Hair – Silk Top Topper 3x4",
            price: "Rs 4,999"
        },
        {
            name: "Backcombed hair topper – Lace Base – 4×4",
            price: "Rs 10,499"
        },
        {
            name: "Human Hair Donut Scrunchies Natural Black",
            price: "Rs 2,099"
        },
        {
            name: "Party mix - Clip in Tinsels #Strandout Set of 2",
            price: "Rs 369"
        },
    ]
  return (
    <div className="card-Carousel">
      <div className="card-heading">
        <p class="Carousal-heading">Price Drop</p>
      </div>
      <OwlCarousel
        className="owl-theme Owl-Carousel"
        autoplay
        loop
        dots ={false}
        margin={40}
        items={3}
      >
        <div className='item'>
            <img className="carousel-img1" src={img1} alt={CardData[0].name} />
            <p className='carousel-font'>{CardData[0].name.toUpperCase()}</p>
            <p className='carousel-font-price'>{CardData[0].price}</p>
        </div>

        <div className='item'>
            <img className="carousel-img1" src={img2} alt={CardData[1].name} />
            <p className='carousel-font'>{CardData[1].name.toUpperCase()}</p>
            <p className='carousel-font-price'>{CardData[1].price}</p>
        </div>

        <div className='item'>
            <img className="carousel-img1" src={img3} alt={CardData[3].name} />
            <p className='carousel-font'>{CardData[2].name.toUpperCase()}</p>
            <p className='carousel-font-price'>{CardData[2].price}</p>
        </div>

        <div className='item'>
            <img className="carousel-img1" src={img4} alt={CardData[3].name} />
            <p className='carousel-font'>{CardData[3].name.toUpperCase()}</p>
            <p className='carousel-font-price'>{CardData[3].price}</p>
        </div>

        <div className='item'>
            <img className="carousel-img1" src={img5} alt={CardData[4].name} />
            <p className='carousel-font'>{CardData[4].name.toUpperCase()}</p>
            <p className='carousel-font-price'>{CardData[4].price}</p>
        </div>
      </OwlCarousel>
      <hr style={{
                color: "#E8E8E8",
                background: "#E8E8E8",
                backgroundColor: "#E8E8E8",
                height: '1px',}} />
    </div>
  );
};
export default CardCarousel;