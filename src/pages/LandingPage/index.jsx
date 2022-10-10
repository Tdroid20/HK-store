import React from "react"; 
import HeaderView from "../../components/header/header";
import './landing.css';
import kaiAvatar from '../../assets/Kai.png';
import Tdroid from '../../assets/tdroid.gif';
import zHenrique from '../../assets/zZHenrique-_.png';

const LandingPage = () => {
    var JoinedAt = new Date()
    JoinedAt = `${JoinedAt.toLocaleDateString('pt-BR')} as ${JoinedAt.getHours()}:${JoinedAt.getMinutes()}`

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
                                    <p className="MF-membersize MF-membersizeJoined">Se juntou ao reino em {JoinedAt}</p>
                                </div>
                            </div>
                            <div className="MF-MemberType">
                                <img src="https://cdn.discordapp.com/attachments/1025949696851705856/1026158288083112007/HighPremium_Logo.png" alt="Premium Type" className="MF-MemberTypeIcon"/>

                            </div>
                        </div>

                        {/* Copy test */}
                        <div className="MF-MemberBox">
                            <img src={kaiAvatar} alt="User Avatar" className="MF-Avatar" />

                            <div className="MF-usernfo">
                                <p className="MF-Username">Kai Inchose</p>
                                <div className="MF-MembersizeInfo flex">
                                    <p className="MF-membersize">Membro a 5 dias.</p>
                                    <p className="MF-membersize MF-membersizeJoined">Se juntou ao reino em {JoinedAt}</p>
                                </div>
                            </div>
                            <div className="MF-MemberType">
                                <img src="https://cdn.discordapp.com/attachments/1017576990217359400/1017577510902452304/BoosterRocket.png" alt="Premium Type" className="MF-MemberTypeIcon"/>

                            </div>
                        </div>

                        <div className="MF-MemberBox">
                            <img src="https://cdn.discordapp.com/attachments/1025989693965340694/1028219701958029342/Wumpus_-_20.png" alt="User Avatar" className="MF-Avatar" />

                            <div className="MF-usernfo">
                                <p className="MF-Username">Hydra</p>
                                <div className="MF-MembersizeInfo flex">
                                    <p className="MF-membersize">Membro a 5 dias.</p>
                                    <p className="MF-membersize MF-membersizeJoined">Se juntou ao reino em {JoinedAt}</p>
                                </div>
                            </div>
                            <div className="MF-MemberType">
                                <img src="https://cdn.discordapp.com/icons/886117125444468746/61c06d57d34a4660cb293d1eaa18e496.png" alt="Premium Type" className="MF-MemberTypeIcon"/>

                            </div>
                        </div>

                        <div className="MF-MemberBox">
                            <img src={zHenrique} alt="User Avatar" className="MF-Avatar" />

                            <div className="MF-usernfo">
                                <p className="MF-Username">zZHenrique-_</p>
                                <div className="MF-MembersizeInfo flex">
                                    <p className="MF-membersize">Membro a 5 dias.</p>
                                    <p className="MF-membersize MF-membersizeJoined">Se juntou ao reino em {JoinedAt}</p>
                                </div>
                            </div>
                            <div className="MF-MemberType">
                                <img src="https://cdn.discordapp.com/icons/886117125444468746/61c06d57d34a4660cb293d1eaa18e496.png" alt="Premium Type" className="MF-MemberTypeIcon"/>

                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}

export default LandingPage;