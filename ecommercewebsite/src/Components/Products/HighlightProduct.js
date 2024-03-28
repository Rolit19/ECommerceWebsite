import React from 'react';
import HighProductimage from "../Assets/Images/ProductofMonth.jpeg"
import "../Products/HighlightProduct.css";

const HighlightProduct = () => {
    return (
      <div className='Product-card'>
        <div sx={{ overflowY: "scroll", maxHeight: "500px" }} container spacing={2}>
            <img src={HighProductimage} alt='ProductOfMonth' className='highlight-product-image' />
        </div>
        <div className='highlight-product-inform'>
            <p className='information-heading'>SILK BASE FAUX SCALP™ – HAIR TOPPER 2X6INCH | NISH HAIR</p>
            <p className='information-price'>Rs. 14,999.00</p>
            <p className='infomation-font'>Tax included. Shipping calculated at checkout.</p>
            <p className='information-text' style={{marginTop:"-10px"}}>UPI & Cards Accepted, Online approval in 2 minutes</p>
            <p className='information-text'><b>COLOR</b> : Natural Black/Brown</p>
            <table className='highlight-product-table'>
                <tbody>
                    <tr>
                        <td className='colortable-cell' style={{border:"1px Black solid"}}><div class="circle-black"></div></td>
                        <td className='colortable-cell'><div class="circle-brown"></div></td>
                        <td className='colortable-cell'><div class="circle-grey"></div></td>
                    </tr>
                </tbody>
            </table>
            <p className='information-text'><b>Length</b> : 16Inch/20Inch</p>
            <table className='highlight-product-table'>
                <tbody>
                    <tr>
                        <td className='colortable-cell information-text' style={{border:"1px Black solid"}}>16Inch</td>
                        <td className='colortable-cell information-text'>20Inch</td>
                    </tr>
                </tbody>
            </table>
            <p className='information-text'><b>Style</b> : With bangs/Without bangs</p>
            <table className='highlight-style-product-table'>
                <tbody>
                    <tr>
                        <td className='colortable-cell information-text' style={{border:"1px Black solid"}}>Without bangs</td>
                        <td className='colortable-cell information-text'>With bangs</td>
                    </tr>
                </tbody>
            </table>
            <div>
                <button className='empty-button-small'><span style={{marginRight:"20px", color:"#939393"}}>-</span> 1 <span style={{marginLeft:"20px", color:"#939393"}}>+</span></button>
                <button className='empty-button-big'>ADD TO CART</button>
            </div>
            <div>
                <button className='filled-button-large'>BUY IT NOW</button>
            </div>            
        </div>
      </div>
    );
  }

export default HighlightProduct;