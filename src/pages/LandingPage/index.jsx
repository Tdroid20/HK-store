import React from "react"; 
import HeaderView from "../../components/header/header";
import './landing.css';

const LandingPage = () => {
    return (
        <>
            <div className="HeaderStyle">
                <HeaderView />
            </div>
            <div className="LandingMain">
                <div className="Welcome">
                    <h1 className="LandingTitle">Seja bem-vindos</h1>
                </div>

                <div className="LandingTextDiv">
                    <div className="bah">
                    <p className="LandingText">
                    Esse é o site oficial da comunidade <a className="colorTextAqua" href="/invite" target="blank">HighKingdom</a>. Esse site ainda está em desenvolvimento. então poderá ter recursos que ainda não estão prontos
                    </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LandingPage;