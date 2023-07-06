import React from "react";
import env from "./macbook/envelope-solid.svg"
import envv from './macbook/instagram.svg'

export function Footer(){
    return(
        <div>
            <div class="footer">
                <h1 id="footer"> for more products contact us </h1>
                <a href="https://www.instagram.com/apple/"><img src={env}/></a>
                <a href="https://www.apple.com/contact/"><img src={envv}/></a>
                

            </div>
        </div>
    )
}