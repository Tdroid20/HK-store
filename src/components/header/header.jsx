/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import './header.css';
import React, { useEffect, useState } from "react";
import brange from '../../assets/BrangeHK.png';
import logoName from '../../assets/Hk.png';
import { getUserDetails } from '../../api/index';

const HeaderView = () => {
    const [ user, setUser ] = React.useState(null);
    const [ loading, setLoading ] = React.useState(true);
    const [ isBeta, setBetaView ] = useState(false);

    useEffect( () => {
        getUserDetails().then(({data}) => {
            setUser(data);
            console.log(data);
            setLoading(false);
        })
    }, [])

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

                    
                    { user === null && (
                    <div className='AuthButton'>
                        <a href='/auth'>

                        <button type="button" className="btn btn-outline-success colorButtonLogin">Login</button>
                        </a>
                        </div>
                    )}
                    
                    { user != null && (<>
                        <div className="btn-group">
                            <button type="button" className="btn btn-secondary HP-UserColor"><img src={user.discordAvatar} alt="" className='HP-Avatar' />{user.discordUsername}</button>
                            <button type="button" className="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false" data-bs-reference="parent">
                            <span className="visually-hidden">Toggle Dropdown</span>
                            </button>
                            <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Action</a></li>
                            <li><a className="dropdown-item" href="#">Another action</a></li>
                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><a className="dropdown-item HP-LogoutColor" href="#"><i class="fa-solid fa-right-from-bracket"></i> Logout</a></li>
                            </ul>
                        </div>
                        </>)}
                    
                </div>
                
            </div>
        </>
    )
}

export default HeaderView;
