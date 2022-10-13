import React from "react";
import HeaderView from "../../components/header/header";
import './authStyle.css'; 

export const AuthPageView = () => {
    return (
        <>
          <div className="HeaderStyle">
            <HeaderView />
          </div>
          
          <div className="AuthMainPage">
            <div className="PageWidth">
                <div className="AuthBox">
                    <div className="AuthFormDiv">
                        <p className="FormAuthTitle">
                        Login
                        </p>
                        <form>
                            <input type="email" name="authEmail" id="authEmail" className="authTextField" placeholder="Digite seu E-mail" />
                            <input type="password" name="authPassword" id="authPassword" className="authTextField" placeholder="Digite sua senha" />

                            <div className="center">
                              <button className="AuthButtonLogin">Login</button>
                            </div>
                        </form>

                        <div className="separator"></div>
                        <a href={process.env.REACT_APP_API + '/auth/discord'}>
                          <button className="LoginWithDiscord"><i className="fa-brands fa-discord"></i> Login with Discord</button>
                        </a>
                    </div>
                </div>
            </div>
          </div>
        </>
    )
}