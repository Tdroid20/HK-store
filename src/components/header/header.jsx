import './header.css';
import React from "react";
import brange from '../../assets/BrangeHK.png';
import logoName from '../../assets/Hk.png'

const HeaderView = () => {
    return (
        <>
            <div className='header'>
                <div className="Logo">
                    <div className='LogoContent'>
                        <a href="/home">
                            <img src={brange} alt="Brasão HighKingdom" className='brange' />
                        </a>
                    </div>
                    <img src={logoName} alt="Brasão HighKingdom" className='HighKingdomLogo' />
                </div>
                

                <div className='NavItems'>
                    <p className='NavLink'><a href="/home" className='NavTitleLink'>Home</a></p>
                    <p className='NavLink'><a href="/store" className='NavTitleLink'>Store</a></p>
                    <p className='NavLink'><a href="https://discord.gg/ndF2gERSDn" className='NavTitleLink'>Comunity</a></p>

                    <div className='AuthButton'>
                    <a href='/auth'>
                        <button type="button" className="btn btn-outline-success colorButtonLogin">Login</button>
                    </a>
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default HeaderView;
