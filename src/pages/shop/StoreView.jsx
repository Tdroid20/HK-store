import './store.css';
import React from "react";
import HeaderView from "../../components/header/header";


export const StoreView  = () => {
    return (
        <>
            <HeaderView />
            <div className="StoreMain">
                    <stripe-pricing-table pricing-table-id="prctbl_1LsFiJGVvIUkVuNFvbDSIUIt"
                    publishable-key="pk_live_51LsEKPGVvIUkVuNFz2wd3jcW22xoLIdCQsn206A2ukEKxMW38nEb7ZMyXxexqFwy9veAZIDZ9VhyvVqC8D4iwE1O00GUBHyvdq">
                    </stripe-pricing-table>
            </div>
        </>
    )
}