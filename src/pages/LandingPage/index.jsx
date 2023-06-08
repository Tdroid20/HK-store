import React, { useState } from "react";
import HeaderView from "../../components/header/header";
import "./landing.css";
import kaiAvatar from "../../assets/Kai.png";
import Tdroid from "../../assets/tdroid.gif";
import zHenrique from "../../assets/zZHenrique-_.png";

import DefaultBadge from "../../assets/Badges/Member.png"
import premiumBadge from "../../assets/Badges/HighPremium_Logo.png"
import boosterBadge from "../../assets/Badges/BoosterRocket.png"

const LandingPage = () => {
  var JoinedAt = new Date();
  JoinedAt = `${JoinedAt.toLocaleDateString(
    "pt-BR"
  )} as ${JoinedAt.getHours()}:${JoinedAt.getMinutes()}`;
  const [profile, showProfile] = useState(false);

  document.onkeydown = function (e) {
    if (e.key === "Escape") {
      showProfile(false);
    }
  };

  return (
    <>
      <div className="HeaderStyle">
        <HeaderView profile={profile} showProfile={showProfile} />
      </div>
      <div className={"LandingMain"}>
        <div className="Welcome">
          <h1 className="LandingTitle">Seja bem-vindos</h1>
        </div>

        <div className="LandingTextDiv">
          <div className="bah">
            <p className="LandingText">
              Esse é o site oficial da comunidade{" "}
              <a className="colorTextAqua" href="/invite" target="blank">
                HighKingdom
              </a>
              . Esse site ainda está em desenvolvimento. então poderá ter recursos que
              ainda não estão prontos
            </p>
          </div>
        </div>

        <div className="memberships">
          <div className="membershipsBox">
            <div className="MF-TitleBox">
              <p className="MF-Title">Nossos Membros</p>
            </div>

            <div className="MF-MemberBox">
              <img src={Tdroid} alt="User Avatar" className="MF-Avatar" />

              <div className="MF-usernfo">
                <p className="MF-Username">! Tdroid2.0</p>
                <div className="MF-MembersizeInfo flex">
                  <p className="MF-membersize">Membro a 5 dias.</p>
                  <p className="MF-membersize MF-membersizeJoined">
                    Se juntou ao reino em {JoinedAt}
                  </p>
                </div>
              </div>
              <div className="MF-MemberType">
                <img
                  src={premiumBadge}
                  alt="Premium Type"
                  className="MF-MemberTypeIcon"
                />
              </div>
            </div>

            {/* Copy test */}
            <div className="MF-MemberBox">
              <img src={kaiAvatar} alt="User Avatar" className="MF-Avatar" />

              <div className="MF-usernfo">
                <p className="MF-Username">Kai Inchose</p>
                <div className="MF-MembersizeInfo flex">
                  <p className="MF-membersize">Membro a 5 dias.</p>
                  <p className="MF-membersize MF-membersizeJoined">
                    Se juntou ao reino em {JoinedAt}
                  </p>
                </div>
              </div>
              <div className="MF-MemberType">
                <img
                  src={boosterBadge}
                  alt="Premium Type"
                  className="MF-MemberTypeIcon"
                />
              </div>
            </div>

            <div className="MF-MemberBox">
              <img
                src={zHenrique}
                alt="User Avatar"
                className="MF-Avatar"
              />

              <div className="MF-usernfo">
                <p className="MF-Username">Hydra</p>
                <div className="MF-MembersizeInfo flex">
                  <p className="MF-membersize">Membro a 5 dias.</p>
                  <p className="MF-membersize MF-membersizeJoined">
                    Se juntou ao reino em {JoinedAt}
                  </p>
                </div>
              </div>
              <div className="MF-MemberType">
                <img
                  src={DefaultBadge}
                  alt="Premium Type"
                  className="MF-MemberTypeIcon"
                />
              </div>
            </div>

            <div className="MF-MemberBox">
              <img src={zHenrique} alt="User Avatar" className="MF-Avatar" />

              <div className="MF-usernfo">
                <p className="MF-Username">zZHenrique-_</p>
                <div className="MF-MembersizeInfo flex">
                  <p className="MF-membersize">Membro a 5 dias.</p>
                  <p className="MF-membersize MF-membersizeJoined">
                    Se juntou ao reino em {JoinedAt}
                  </p>
                </div>
              </div>
              <div className="MF-MemberType">
                <img
                  src={premiumBadge}
                  alt="Premium Type"
                  className="MF-MemberTypeIcon"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
