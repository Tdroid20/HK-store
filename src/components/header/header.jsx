import './header.css';
import React from "react";
import brange from '../../assets/BrangeHK.png';

const HeaderView = () => {
    return (
        <>
            <div className='header'>
                <div className="Logo">
                    <a href="/home">
                        <img src={brange} alt="Brasão HighKingdom" className='brange' />
                    </a>
                </div>
                
            </div>
        </>
    )
}

export default HeaderView;