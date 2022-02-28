



import React, { useEffect, useState } from "react";
import { imageService } from "../services/imageService";
import '../App.css';

const AbbrWA = () => {

    return (
        <div className="abbr-container" >
            <section>
                <h1>An Abbreviation example</h1>
                <p>You can use <abbr title="Cascading Style Sheets">CSS</abbr> to style your
                    <abbr title="HyperText Markup Language">HTML</abbr>.
                </p>
            </section>

            <section>
                <h5>How to correctly spell Pronunciation</h5>
                <p class="spell-out" aria-label="globant">G. L. O B A N T</p>
            </section>
        </div>
    );
};

export default AbbrWA;
