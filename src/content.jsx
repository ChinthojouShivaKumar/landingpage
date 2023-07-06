import React from "react";
import appmac1 from "./macbook/appmac1.jpg"


export function Body(){

    return(
        <div>
            <section>
                <div class="container1">
                    <div class="container" style={{width:'550px'}}>
                        <h6 id="home">13 and 15 Models with M2 Chip</h6>
                        <h1>MacBook Air</h1>
                        <h3><p>Strikingly thin and fast so you</p>
                        <p>can work, play or create</p>
                        <p>anywhere.</p>
                        </h3>  
                        <p>MacBook Air 13” from ₹114900.00*</p>
                        <p><span>New</span> MacBook Air 15” from ₹134900.00*</p>
                    </div>
                    <div class="imgg">
                        <img src={appmac1} alt="" />
                    </div>
                    <div class="button">
                        <button>Buy Now</button>
                        <span><a href="#action">Learn More </a></span>
                    </div>
                </div>
            </section>
        </div>


    )


}