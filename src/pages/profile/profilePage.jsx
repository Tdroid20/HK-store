/* eslint-disable no-lone-blocks */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useReducer, useState } from "react";
import { getUserDetails } from "../../api";
import { HeaderViewProfile } from "../../components/header/HeaderProfile";
import './profile.css'


export const ProfileView = () => {
    const [ user, setUser ] = React.useState(null);
    const [ loading, setLoading ] = React.useState(true);
    const [ isBeta, setBetaView ] = useState(false);

    useEffect( () => {
        getUserDetails().then(({data}) => {
            console.log(data);
            setUser(data);
            setLoading(false);
        })
    }, [])

    return (
        <>
          { !loading && (
            <div className="patua">
                <HeaderViewProfile user={user}/>
    
                <div className="banner">
                    <img className="w-100" id="banner" src="https://t2.tudocdn.net/593057?w=1920"
                    height="300" width="120" />
                    <center>
                        <img id="avatar" className="HP-AvatarProfile" src={user.discordAvatar} />
                        <p className="fs-3 mb-0" id="username">{user.discordUsername}</p>
                        <p className="fs-6 fw-light" id="userID">{user.discordID}</p>
                    </center>
                </div>
                <div className="container">
                    <p id="aboutTitle" className="fs-1 d-inline">Sobre mim</p> 
                    <button className="btn mb-2"><i className="fas fa-check"></i></button>
                    <textarea className="form-control" id="aboutMe" placeholder={user.discordUsername}></textarea>
                </div>
            </div>
          ) }
        </>
    )
}