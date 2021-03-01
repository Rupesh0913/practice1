import React from 'react';
import './navbar.css'
function Navbar(){
    return(
        <div className="App">
            <div class="container">
                <div class="row">
                    <nav>
                        < a href="#" id="title">LANDKIT.</a>
                        <ul>
                            <li><a href="#">Landings</a></li>
                            <li><a href="#">Pages</a></li>
                            <li><a href="#">Account</a></li>
                            <li><a href="#">Documentation</a></li>
                        </ul>
                        <button id="button">BUY NOW</button>
                    </nav>
                </div>
            </div>
        </div>
    );
}
export default Navbar; 