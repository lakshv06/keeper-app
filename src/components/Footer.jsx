import React from "react";

function Footer(){

    const today = new Date();
    const Year = today.getFullYear();

    return <footer><p>Copyright © {Year}</p></footer>;
}

export default Footer;
