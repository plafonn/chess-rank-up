import React from "react";
import { Link } from "react-router-dom";
import'./Scoreboard.css';

const Scoreboard = () => {
    return (
        <>
            <div className="container">
                <div className="up2">
                    <div className="sbb">SCOREBOARD</div>
                    <div className="top3">
                        <div className="jedan"></div>
                        <div className="dva"></div>
                        <div className="tri"></div>


                        <div className="jedanK">1</div>
                        <div className="dvaK">2</div>
                        <div className="triK">3</div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Scoreboard;