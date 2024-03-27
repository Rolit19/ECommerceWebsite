import React from "react";
import Marquee from "react-fast-marquee";
import "./Marquee.css"
import { LiaTruckMovingSolid } from "react-icons/lia";
import { AiOutlineTag } from "react-icons/ai";
import { IoReturnDownBack, IoLocationOutline } from "react-icons/io5";

const SaleMarqueeComponent = () => (
  <Marquee className="Sale-Marquee">
    <div className="Sale-Marquee-Text">
        <LiaTruckMovingSolid style={{marginTop:"22px", marginRight:"10px"}}/>
        <p>Free Domestic Shipping</p>
    </div>
    <div className="Sale-Marquee-Text">
        <AiOutlineTag style={{marginTop:"22px", marginRight:"10px"}}/>
        <p>EMI Options Avalible</p>
    </div>
    <div className="Sale-Marquee-Text">
        <IoReturnDownBack style={{marginTop:"22px", marginRight:"10px"}}/>
        <p>6 Days Easy Exchange</p>
    </div>
    <div className="Sale-Marquee-Text">
        <IoLocationOutline style={{marginTop:"22px", marginRight:"10px"}}/>
        <p>Cash On Delivery Avalible</p>
    </div>
    <div className="Sale-Marquee-Text">
        <LiaTruckMovingSolid style={{marginTop:"22px", marginRight:"10px"}}/>
        <p>Free Domestic Shipping</p>
    </div>
    <div className="Sale-Marquee-Text">
        <AiOutlineTag style={{marginTop:"22px", marginRight:"10px"}}/>
        <p>EMI Options Avalible</p>
    </div>
    <div className="Sale-Marquee-Text">
        <IoReturnDownBack style={{marginTop:"22px", marginRight:"10px"}}/>
        <p>6 Days Easy Exchange</p>
    </div>
    <div className="Sale-Marquee-Text">
        <IoLocationOutline style={{marginTop:"22px", marginRight:"10px"}}/>
        <p>Cash On Delivery Avalible</p>
    </div>
  </Marquee>
);

export default SaleMarqueeComponent;