import React from "react";

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