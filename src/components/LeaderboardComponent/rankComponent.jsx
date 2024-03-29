import React, { useEffect } from "react";
import { useState } from "react";
import { findUserById, getImageAvatar, getLeaderboardDetails } from "../../api";
import wumpus from "../../assets/Wumpus_-_20.png";
import { LinearProgress } from "@mui/material";
import "./rankStyle.css";
import { TableUserBadge, VerifyBadge } from "../badges/badges.status";
import undefinedImg from "../../assets/imageundefined.png";

export const RankComponent = () => {
  const [loading, setLoading] = useState(true);
  const [expInfo, setExpInfo] = useState(null);
  useEffect(() => {
    getLeaderboardDetails().then(({ data }) => {
      setExpInfo(data);
      setLoading(false);
    });
  }, []);

  return (
    <div>
      {!loading && (
        <div className="leaderboard" key={15515}>
          <div className="membershipsBox">
            <div className="MF-TitleBox">
              <p className="MF-Title">Leaderboard</p>
            </div>

            {expInfo.map((x) => {
              let user = x.user;
              let exp = x.expInfo;

              return (
                <div className="MF-MemberBox" key={user.idU}>
                  <img
                    src={
                      user.discordAvatar === undefined ? undefinedImg : user.discordAvatar
                    }
                    alt="User Avatar"
                    className="MF-Avatar"
                  />

                  <div className="MF-usernfo" key={user.id}>
                    <p className="MF-Username">{user.discordUsername ?? exp.user}</p>
                    <div className="MF-MembersizeInfo flex">
                      <p className="MF-membersize">
                        Xp:{" "}
                        <span className="XpColor">
                          {exp.xp}/{exp.nextLevel}
                        </span>
                      </p>
                      <p className="MF-membersize MF-membersizeJoined">
                        Level: <span className="LevelColor">{exp.level}</span>
                      </p>
                    </div>
                  </div>
                  <div className="MF-MemberType" key={user.id}>
                    <TableUserBadge name={user.badges[1]} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
