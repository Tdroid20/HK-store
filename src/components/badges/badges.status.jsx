/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import verify from '../../assets/verify.svg';
import './badges.css';

import member from '../../assets/Badges/Member.png';
import booster from '../../assets/Badges/BoosterRocket.png';
import premium from '../../assets//Badges/HighPremium_Logo.png';

export const PrimaryBadge = (props) => {
    return (
        <>
            <span className="badge rounded-pill text-bg-primary">{props.flagName}</span>
        </>
    )
}

export const DangerBadge = (props) => {
    return (
        <>
            <span className="badge rounded-pill text-bg-danger">{props.flagName}</span>
        </>
    )
}

export const DarkBadge = (props) => {
    return (
        <>
            <span className="badge rounded-pill text-bg-dark">{props.flagName}</span>
        </>
    )
}

export const InfoBadge_Cian = (props) => {
    return (
        <>
            <span className="badge rounded-pill text-bg-info">{props.flagName}</span>
        </>
    )
}

export const LightBadge = (props) => {
    return (
        <>
            <span className="badge rounded-pill text-bg-light">{props.flagName}</span>
        </>
    )
}

export const SecondaryBadge = (props) => {
    return (
        <>
            <span className="badge rounded-pill text-bg-secondary">{props.flagName}</span>
        </>
    )
}

export const SuccessBadge = (props) => {
    return (
        <>
            <span className="badge rounded-pill text-bg-success">{props.flagName}</span>
        </>
    )
}

export const WarningBadge = (props) => {
    return (
        <>
            <span className="badge rounded-pill text-bg-warning">{props.flagName}</span>
        </>
    )
}

export const VerifyBadge = (props) => {
    
    return (
        <>
           <span className="verify"><i className="fa-regular fa-circle-check fa-2xs"></i></span>
        </>
    )
}

export const UserBadges = (props) => {
    const { name } = props;

    let img;

    switch(name) {
        case 'member':
            img = member;
            break;
        case 'highBooster':
            img = booster;
            break;
        case 'highPremium':
            img = premium;
            break;
        default:
            break;
    }

    return (
        <div key={name}>
            <img src={img} alt="Badge" className={"BadgeIcon " + name + "Badge"} key={name} />
        </div>
    )
}

export const TableUserBadge = (props) => {
    const { name } = props;
    let img = member;

    switch(name) {
        case 'highBooster':
            img = booster;
            break;
        case 'highPremium':
            img = premium;
            break;
        default:
            break;
    }

    return (
        <div key={name}>
            <img src={img} alt="Premium Type" className="MF-MemberTypeIcon" />
        </div>
    )
}