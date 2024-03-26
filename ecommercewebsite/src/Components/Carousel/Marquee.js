import React from "react";
import Marquee from "react-fast-marquee";
import "./Marquee.css"

const MarqueeComponent = () => (
  <Marquee>
    <div class="scrolling-text--item-outline-text--true"><span>NISH HAIR MAKES ALL YOUR HAIR DREAMS COME TRUE .</span></div>
    <div class="scrolling-text--item-outline-text--false"><span>100% HUMAN HAIR EXTENSION</span></div>
  </Marquee>
);

export default MarqueeComponent;