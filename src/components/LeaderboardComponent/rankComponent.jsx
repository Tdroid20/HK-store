import React, { useEffect } from "react";
import { useState } from "react";
import { findUserById, getLeaderboardDetails } from "../../api";
import wumpus from '../../assets/Wumpus_-_20.png'

export const RankComponent = () => {
    const [loading, setLoading] = useState(true);
    const [expInfo, setExpInfo] = useState(null);
    useEffect(() => {
        getLeaderboardDetails().then(({ data }) => {
            setExpInfo(data);
            setLoading(false);
        });
    }, [])
    let counter = 0;
    
    return (
        <div>
            {!loading && (
                <div className="memberships" key={15515}>
                    <div className="membershipsBox">

                        <div className="MF-TitleBox">
                            <p className="MF-Title">Leaderboard</p>
                        </div>

                        {expInfo.map(x => {
                            let user = x.user;
                            let exp = x.expInfo
                            console.log(x);

                            return (
                                <div className="MF-MemberBox" key={user.idU}>
                                    <img src={user.discordAvatar ?? wumpus} alt="User Avatar" className="MF-Avatar" />

                                    <div className="MF-usernfo" key={user.id}>
                                        <p className="MF-Username">{user.discordUsername ?? exp.user}</p>
                                        <div className="MF-MembersizeInfo flex">
                                            <p className="MF-membersize">Xp: {exp.xp}</p>
                                            <p className="MF-membersize MF-membersizeJoined">Level {exp.level}</p>
                                        </div>
                                    </div>
                                    <div className="MF-MemberType" key={user.id}>
                                        <img src="https://cdn.discordapp.com/attachments/1025949696851705856/1026158288083112007/HighPremium_Logo.png" alt="Premium Type" className="MF-MemberTypeIcon" />

                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            )}
        </div>
    )
}