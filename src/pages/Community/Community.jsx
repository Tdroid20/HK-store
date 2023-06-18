import { useEffect, useState } from "react";
import './Community.css';
import personWalking from "../../assets/Icons/person-walking-luggage-solid.svg"

export const CommunityPage = () => {
console.log(`${process.env.REACT_APP_COMMUNITY}`)
    return (
        <div class="mainCommunity"> 
            <img src={personWalking} alt="Pessoa andando com uma mala de viagem" className="personWalking"/>
            <h1 className="titleCM">Atenção! A pagina da comunidade está em outro canto desse site. Deseja continuar com o redirecionamento?</h1>
            <div className="actions">
            <a href={process.env.REACT_APP_COMMUNITY}>
                <button
                  type="button"
                  className="btn btn-outline-success actionsButton"
                >
                  Continuar
                </button>
                </a>
                <a href="/">
                <button
                  type="button"
                  className="btn btn-outline-danger actionsButton"
                >
                  Voltar
                </button>
                </a>
            </div>
        </div>
    )
}
export default CommunityPage;