import React, { Component } from "react";

class Header extends React.Component {
    render() {
        return (
            <div>
                <header id="nav-wrapper">
                    <nav id="nav">
                        <div class="nav left">
                            <span class="gradient skew"><h1 class="logo un-skew"><a href="#home"><img src="assets/resources/img/logo.png" alt="logo" class="logo-dream" /></a></h1></span>
                            <button id="menu" class="btn-nav"><span class="fas fa-bars"></span></button>
                        </div>
                        <div class="nav right">
                            <a href="#home" class="nav-link active"><span class="nav-link-span"><span class="u-nav">Home</span></span></a>
                            <a href="#about" class="nav-link"><span class="nav-link-span"><span class="u-nav">About</span></span></a>
                            <a href="#package" class="nav-link"><span class="nav-link-span"><span class="u-nav">Packages</span></span></a>
                            <a href="#offers" class="nav-link"><span class="nav-link-span"><span class="u-nav">Offers</span></span></a>
                            <a href="#contact" class="nav-link"><span class="nav-link-span"><span class="u-nav">Contact</span></span></a>
                        </div>
                    </nav>
                </header>
            </div>
        );
    }
}


export default Header;