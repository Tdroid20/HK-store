/* eslint-disable no-lone-blocks */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import { getUserDetails } from "../../api";
import './profile.css';
import { MdVerified } from 'react-icons/md';
import banner from '../../assets/BannerNull.png'

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

        /*  */
        <>
        <head>
            <script src="https://kit.fontawesome.com/62b8a87af8.js" crossOrigin="anonymous"></script>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css" />
        </head>
          { !loading && (
            <div className="profileMain">
                <div className="cardProfile">
                    <div className="cardBanner">
                        <img src={banner} className="cardBanner" />
                    </div>

                        <div className="cardBackground">
                            <img src={user.discordAvatar} className="cardAvatarIcon" />
                        </div>
                    <div className="cardAvatar">
                    </div>

                    <div className="container">
                        <div className="cardContainer">
                            <p className="cardUsername">{user.discordUsername}</p>
                        </div>
                    </div>
                </div>
            </div>
          ) }
        </>
    )
}