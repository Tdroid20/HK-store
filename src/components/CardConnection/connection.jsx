/* eslint-disable jsx-a11y/alt-text */

import React from "react";
import './connection.css'

import spotify from '../../assets/Icons/spotify.png';
import battlenet from '../../assets/Icons/battlenet.png';
import epicgames from '../../assets/Icons/epicgames.png';
import youtube from '../../assets/Icons/youtube.png';
import paypal from '../../assets/Icons/paypal.png';
import facebook from '../../assets/Icons/Facebook.webp';
import github from '../../assets/Icons/github.png';
import leagueoflegends from '../../assets/Icons/lol.png';
import playstation from '../../assets/Icons/psn.png';
import riotgames from '../../assets/Icons/riot.webp';
import steam from '../../assets/Icons/steam.png';
import twitch from '../../assets/Icons/twitch.png';
import twitter from '../../assets/Icons/Twitter.png';
import xbox from '../../assets/Icons/xbox.png';
import reddit from '../../assets/Icons/reddit.png'

export const CardConnection = (props) => {
    console.log('a');
    const { connection } = props;
    let img;

    console.log(connection);

    switch(connection.type) {
        case 'spotify':
            img = spotify
            break;
        case 'battlenet':
            img = battlenet
            break;
        case 'epicgames':
            img = epicgames
            break;
        case 'youtube':
            img = youtube
            break;
        case 'paypal':
            img = paypal
            break;
        case 'facebook':
            img = facebook
            break;
        case 'github':
            img = github
            break;
        case 'leagueoflegends':
            img = leagueoflegends
            break;
        case 'playstation':
            img = playstation
            break;
        case 'riotgames':
            img = riotgames
            break;
        case 'steam':
            img = steam
            break;
        case 'twitch':
            img = twitch
            break;
        case 'twitter':
            img = twitter
            break;
        case 'xbox':
            img = xbox
            break;
        case 'reddit':
            img = reddit
            break;
        default: 
            break;
    }

        let icon = img ? <img src={img} className="icon" /> : <i className="icon fa-brands fa-discord"></i>

    return (
            <div className="cardConnection scrollCreate" key={connection.id}>
                {icon}
                <p className="connectionName">{connection.name}</p>
        </div>
    )
}