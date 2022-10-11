import './header.css';
import React, { useEffect, useState } from "react";
import brange from '../../assets/BrangeHK.png';
import logoName from '../../assets/Hk.png';
import { getUserDetails } from '../../api/index'

const HeaderView = () => {
    const [ user, setUser ] = React.useState(null);
    const [loading, setLoading ] = React.useState(true);

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
                        <a href="http://localhost:3001/auth/logout">
                            <div className="UserButton">
                                <img src={user.discordAvatar} alt="User Avatar" className='HP-Avatar'/>
                                <p className='HP-Username'>{user.discordUsername}</p>
                            </div>
                        </a>
                        </>)}
                    
                </div>
                
            </div>
        </>
    )
}

export default HeaderView;
