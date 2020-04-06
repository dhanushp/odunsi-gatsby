import React from "react";
import Img from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";

const Banner = () => {
    return (
        <div className="banner">
            <div className="container">
                <div className="row">
                    <div className="main-text">Oladimeji Odunsi</div>
                </div>
            </div>
        </div>
    )
}

export default Banner;