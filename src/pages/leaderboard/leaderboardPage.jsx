import React, { useState } from "react";
import { useEffect } from "react";
import { findUserById, getLeaderboardDetails } from "../../api";
import HeaderView from "../../components/header/header";
import { RankComponent } from "../../components/LeaderboardComponent/rankComponent";

export const Leaderboard = () => {
    return (
        <div>
            <HeaderView />
            <RankComponent key={545454}/>
        </div>
    )
}
