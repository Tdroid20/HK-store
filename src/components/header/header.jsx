/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import './header.css';
import React, { useEffect, useState } from "react";
import brange from '../../assets/BrangeHK.png';
import logoName from '../../assets/Hk.png';
import { getUserDetails } from '../../api/index';
import { DangerBadge, DarkBadge, LightBadge, PrimaryBadge, SecondaryBadge, SuccessBadge, WarningBadge } from '../badges/badges.status';
import { ProfileView } from '../profile/profileModal';

const HeaderView = (props) => {
    const [ loading, setLoading ] = React.useState(true);
    const [ isBeta, setBetaView ] = useState(false);
    const [ user, setUser ] = React.useState(null);
    const { profile, showProfile } = props;

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
                    <a href="/home">
                        <div className='LogoContent'>
                                <img src={brange} alt="Brasão HighKingdom" className='brange' />
                                <img src={logoName} alt="Brasão HighKingdom" className='HighKingdomLogo' />
                        </div>
                    </a>
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
                                <button type="button" className="btn btn-secondary HP-UserColor"><a className='HP-Username' onClick={() => showProfile(true)}><img src={user.discordAvatar} alt="" className='HP-Avatar' />{user.discordUsername}</a></button>
                            <button type="button" className="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false" data-bs-reference="parent">
                            <span className="visually-hidden">User Dropdown</span>
                            </button>
                            <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Leaderboard</a></li>
                            <li><a className="dropdown-item" href="#">Another action</a></li>
                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><a className="dropdown-item HP-LogoutColor" href="#"><i className="fa-solid fa-right-from-bracket"></i> Logout {<DangerBadge flagName="Dev" />}</a></li>
                            </ul>
                        </div>
                        </>)}
                    
                </div>
                
            </div>
        </>
    )
}

export default HeaderView;
