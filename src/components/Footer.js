import React from "react";

const Footer = () => {
    return (
        <div>
            <footer>
                <div class="row">
                    <div class="col span-1-of-3 box footer-nav">
                    </div>

                    <div class="col span-1-of-3 box footer-feature">
                        <ul class="social-links">
                            <li><a href="#"><i class="ion-social-facebook"></i></a></li>
                            <li><a href="#"><i class="ion-social-instagram"></i></a></li>
                        </ul>
                    </div>

                    <div class="col span-1-of-3 box">
                    </div>
                </div>

                <div class="row">
                    <p>
                        Copyright &copy; 2021 by Abhishek Tech. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
}

export default Footer;