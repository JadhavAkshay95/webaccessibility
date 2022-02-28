

import React, { useEffect, useState } from "react";
import '../App.css';
import { useHistory } from "react-router-dom";

const Operable = () => {
    let history = useHistory();

    const [cntr, setCntr] = useState(0);
    const [changeCntr, setchangeCntr] = useState(true);

    setTimeout(() => {
        setCntr(cntr + 1)
    }, 1000);

    useEffect(() => {
        if (cntr >= 5 && changeCntr) {
            history.push("/search");
        }
    }, [cntr]);

    const dontMoveHandler = () => {
        setchangeCntr(false)
    }

    return (
        <div>
            <div className="operable-container">
                <h1>Operable web accesibility example</h1>
                <p>you'll be transported to our Globant site in 5 seconds,</p>
                <div>
                    <button onClick={dontMoveHandler}>Dont Move</button>
                    <button aria-label="Click here to go globant website" onClick={dontMoveHandler}>Go to Globant</button>
                </div>
                <div>
                    <p>
                        <h3> Our news. Our views.</h3>
                        <p style={{ color: '#19f183' }}>
                            Sign up for our newsletter. It's a "first read" for readers around the globe.
                            You'll find the latest news and insights for organizations that seek reinvention.
                        </p>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Operable;
