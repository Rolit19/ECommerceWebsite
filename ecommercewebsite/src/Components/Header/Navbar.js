import React,{ useState } from 'react';
import './Navbar.css'
import Logo from '../Assets/Images/logoimg.avif';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import IconButton from '@mui/material/IconButton';
import Sidedrawer from './SideDrawer';

const Navbar =() =>{
    const [scrolled, setScrolled] = useState(false);
    const [showSidedrawer, setShowSidedrawer] = useState(false);
    window.onscroll = () => {
        if(window.scrollY) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    }
    const closeShowSidedrawer = () => {
        setShowSidedrawer(false);
    }
    return(
        <div>
        {
            showSidedrawer ? <Sidedrawer show={showSidedrawer} closeSidedrawer={closeShowSidedrawer} /> : null
        }
        <div className={"Header " + (scrolled ? "Header_BoxShadow" : "")}>
                <div className="Header_Container">
                    <div className="Header_Logo">
                        <img src={Logo} className="navbar-logo" alt="Logo" />
                    </div>
                    <div className="Header_SideMenuBtn">
                        <IconButton onClick={() => setShowSidedrawer(true)}>
                            <MenuRoundedIcon />
                        </IconButton>
                    </div>
                    <div className="Header_LinksContainer">
                        <ul className="Header_Links">
                            <li>
                            <p className="Header_Links">HOME</p>
                            </li>
                            <li>
                            <p className="Header_Links">SHOP</p>
                            </li>
                            <li>
                            <p className="Header_Links">HELP ME</p>
                            </li>
                            <li>
                            <p className="Header_Links">ABOUT US</p>
                            </li>
                            <li>
                            <p className="Header_Links">BOOK A TRIAL</p>
                            </li>
                            <li>
                            <p className="Header_Links">REVIEWS</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Navbar;