/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import "./header.css";
import React, { useEffect, useState } from "react";
import brange from "../../assets/BrangeHK.png";
import logoName from "../../assets/Hk.png";
import { getUserDetails } from "../../api/index";
import {
  DangerBadge,
  DarkBadge,
  LightBadge,
  PrimaryBadge,
  SecondaryBadge,
  SuccessBadge,
  WarningBadge,
} from "../badges/badges.status";
import Modal from "react-modal";
import banner from "../../assets/BannerNull.png";
import { CardConnection } from "../CardConnection/connection";
import { UserBadges } from "../badges/badges.status";
import { GiHamburgerMenu } from "react-icons/gi";

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.466)",
    overflow: "hidden",
  },

  content: {
    fontFamily: "ABC Ginto Normal Trial",
    fontStyle: "normal",
    fontWeight: "700",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "600px",
    height: "610px",
    overflow: "none",
    border: "none",
    display: "flex",
    background: "none",
    justifyContent: "center",
    alignItems: "center",
  },
};

const HeaderView = () => {
  const [loading, setLoading] = React.useState(true);
  const [user, setUser] = React.useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  function handleHidden() {
    setHidden(!hidden);
  }

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  useEffect(() => {
    getUserDetails().then(({ data }) => {
      setUser(data);
      setLoading(false);
    });
  }, []);

  let scrollControl = isOpen ? "hidden" : "";

  document.getElementById("body").className = scrollControl;

  let idKey = 0;

  return (
    <>
      <div className="header">
        <div className="Logo">
          <a href="/home">
            <div className="LogoContent">
              <img src={brange} alt="Brasão HighKingdom" className="brange" />
              <img src={logoName} alt="Brasão HighKingdom" className="HighKingdomLogo" />
            </div>
          </a>
          <GiHamburgerMenu className="hamburguer" onClick={handleHidden} />
        </div>

        <div className={hidden ? "NavItems" : "Display NavItems"}>
          <p className="NavLink">
            <a href="/home" className="NavTitleLink">
              Home
            </a>
          </p>
          <p className="NavLink">
            <a href="/store" className="NavTitleLink">
              Store
            </a>
          </p>
          <p className="NavLink">
            <a href="/staff" className="NavTitleLink">
              Staff
            </a>
          </p>
          <p className="NavLink">
            <a href="https://discord.gg/ndF2gERSDn" className="NavTitleLink">
              Comunity
            </a>
          </p>

          {user === null && (
            <div className="AuthButton">
              <a href="/auth">
                <button
                  type="button"
                  className="btn btn-outline-success colorButtonLogin"
                >
                  Login
                </button>
              </a>
            </div>
          )}

          {user != null && (
            <>
              <div className="btn-group">
                <button
                  type="button"
                  className="btn btn-secondary HP-UserColor"
                  onClick={openModal}
                >
                  <a className="HP-Username">
                    <img src={user.discordAvatar} alt="" className="HP-Avatar" />
                    {user.discordUsername}
                  </a>
                </button>
                <button
                  type="button"
                  className="btn btn-secondary dropdown-toggle dropdown-toggle-split"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  data-bs-reference="parent"
                >
                  <span className="visually-hidden">User Dropdown</span>
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="/leaderboard">
                      Leaderboard {<DangerBadge flagName="NEW" />}
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a
                      className="dropdown-item HP-LogoutColor"
                      href={process.env.REACT_APP_API + "/auth/logout"}
                    >
                      <i className="fa-solid fa-right-from-bracket"></i> Logout
                    </a>
                  </li>
                </ul>
              </div>
            </>
          )}
        </div>
      </div>

      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        {!loading && (
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
                    {user.badges &&
                      user.badges
                        .filter((index, item) => user.badges.indexOf(index) === item)
                        .map((x) => {
                          return <UserBadges name={x} key={x} />;
                        })}
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
                  <div className="cardAboutMe">About-me</div>
                  <textarea
                    name="aboutMe"
                    id="aboutMe"
                    cols="35"
                    rows="3"
                    placeholder={user.about}
                    className="aboutMe"
                    maxLength="100"
                  ></textarea>
                </div>
                <div className="cardSeparator topSep"></div>
                <div className="cardGroup">
                  {user.discordUsername &&
                    user.discordConnections
                      .filter((x) => x.visibility === 1)
                      .map((y) => {
                        return <CardConnection connection={y} key={idKey++} />;
                      })}
                </div>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </>
  );
};

export default HeaderView;
