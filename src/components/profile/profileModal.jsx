/* eslint-disable no-lone-blocks */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import { getUserDetails } from "../../api";
import './profile.css';
import { MdVerified } from 'react-icons/md';
import banner from '../../assets/BannerNull.png';
import { CardConnection } from "../CardConnection/connection";
import member from '../../assets/Badges/Member.png'
import premium from '../../assets//Badges/HighPremium_Logo.png'
import booster from '../../assets/Badges/BoosterRocket.png'

export const ProfileView = () => {
    const [ user, setUser ] = React.useState(null);
    const [ loading, setLoading ] = React.useState(true);
    const [ isBeta, setBetaView ] = useState(false);

    useEffect( () => {
        getUserDetails().then(({data}) => {
            setUser(data);
            setLoading(false);
        })
    }, [])

    let idKey = 0;

    return (

        /*  */
        <>
        {/* <head>
            <script src="https://kit.fontawesome.com/62b8a87af8.js" crossOrigin="anonymous"></script>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css" />
        </head> */}
          { !loading && (
            <div className="profileMain">
                <div className="cardProfile">
                    <div className="cardBanner">
                        <img src={banner} className="cardBanner" />
                    </div>

                        <div className="cardBackground">
                            <img src={user.discordAvatar} className="cardAvatarIcon" />
                        </div>
                    

                    <div className="Badge">
                        <div className="BadgeWidthController">
                            <div className="badgePlace"> 
                                {/* <img src={member} alt="Badge" className="BadgeIcon memberBadge" />
                                <img src={premium} alt="Badge" className="BadgeIcon" />
                                <img src={booster} alt="Badge" className="BadgeIcon boosterBadge" /> */}
                                
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="cardContainer">
                            <p className="cardUsername">{user.discordUsername}</p>
                        </div>

                        <p className="cardTabs">User Info</p>
                        <div className="cardSeparator"></div>
                        <div className="cardInformationUser">
                            <div className="cardAboutMe">
                                About-me
                            </div>
                                <textarea name="aboutMe" id="aboutMe" cols="35" rows="3" placeholder={user.about} className="aboutMe" maxLength="100"></textarea>
                        </div>
                        <div className="cardSeparator topSep"></div>
                            <div className="cardGroup">
                                { user.discordUsername && user.discordConnections.filter((x) => x.visibility === 1).map(y => {
                                    

                                    return (
                                        <CardConnection connection={y} key={idKey++} />
                                    )
                                }) }
                            </div>
                    </div>
                </div>
            </div>
          ) }
        </>
    )
}