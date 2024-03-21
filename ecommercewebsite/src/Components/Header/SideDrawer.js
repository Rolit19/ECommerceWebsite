import React, { useState, useEffect } from 'react';
import './SideDrawer.css';
import Backdrop from './Backdrop';
import Logo from '../Assets/Images/logoimg.avif';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';

const Sidedrawer = ({show, closeSidedrawer}) => {
    const [closing, setClosing] = useState(false);
    const closeSidedrawerUtil = () => {
        setClosing(true);
        setTimeout(() => closeSidedrawer(), 300);
    }

    useEffect(() => {
        return () => {
            setClosing(false);
        }
        
    }, [show])

    return (
        <div>
            <Backdrop closeSidedrawer={closeSidedrawerUtil} />
            <div className={"Sidedrawer " + (closing ? "Sidedrawer_Close" : "Sidedrawer_Open")}>
                <div className="d-flex justify-content-between">
                    <div className="d-flex flex-column p-1">
                        <IconButton onClick={closeSidedrawerUtil}>
                            <CloseIcon/>
                        </IconButton>
                    </div>
                    <div className="Sidedrawer_Logo">
                        <img src={Logo} alt="Logo"/>
                    </div>
                </div>
                <ul className="d-flex flex-column Sidedrawer_Links">
                <li>
                    <p className="Sidedrawer_Links">HOME</p>
                </li>
                <li>
                    <p className="Sidedrawer_Links">SHOP</p>
                </li>
                <li>
                    <p className="Sidedrawer_Links">HELP ME</p>
                </li>
                <li>
                    <p className="Sidedrawer_Links">ABOUT US</p>
                </li>
                <li>
                    <p className="Sidedrawer_Links">BOOK A TRIAL</p>
                </li>
                <li>
                    <p className="Sidedrawer_Links">REVIEWS</p>
                </li>
                <br/>
                </ul>
            </div>
        </div>
    )
}

export default Sidedrawer;