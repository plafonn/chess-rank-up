import React, { useState, useEffect } from "react";
import "./Mjesto.css";

const Mjesto = ({mjesto}) => {
    const getTopValue = (place) => {
        return `${7 * (place-4) + 30}vh`; 
    };

    const ds = {
        top: getTopValue(mjesto.place),
    };

    return (
        <>
            <div className='mjesto' style={ds}>
                <div className='maleniM1'>{mjesto.place}.</div>
                <div className='maleniM2'>{mjesto.name}</div>
                <div className='maleniM3'>{mjesto.points}</div>
                </div>
        </>
    );
}

export default Mjesto;
