import React, { Component } from "react";
import AboutUs from "./AboutUs";
import Packages from "./packs/Packages";
import ImageSlider from "./ImageSlider";
import './ImageSlider.css';
import { SliderData } from "./SliderData";
import Offers from "./offers/Offers";
import TermsConditions from "./T&C";
import ContactUs from "./ContactUs";
import { ProductData } from "./packs/ProductData";
import Filter from "./packs/Filter";

class Home extends React.Component {

    constructor() {
        super();
        this.state = {
            packages: ProductData,
            cat: '',
            isSelect: false
        }
    }

    filteringName = (e) => {
        let categ = e.target.value;
        if (categ === '') {
            this.setState({
                cat: categ,
                packages: ProductData
            })
        }
        else {
            this.setState({
                cat: categ,
                packages: ProductData.filter(pack => {
                    return pack.category === e.target.value;
                })
            })
        }
    }

    render() {
        return (
            <div>

                <main>
                    {/* <!--IMAGE SLIDER--> */}
                    <section id="home">
                        <ImageSlider slides={SliderData} />
                    </section>

                    {/* <!--ABOUT US--> */}
                    <section id="about">
                        <AboutUs />
                    </section>

                    {/* <!--PACKAGES--> */}
                    <section class="section-plans" id="package">
                        <Filter
                            filteringName={this.filteringName}
                            cat={this.state.cat}
                        />
                        <Packages packages={this.state.isSelect? null : this.state.packages} />
                    </section>

                    {/* <!--OFFERS--> */}
                    <section class="section-plans" id="offers">
                        <Offers />
                        <TermsConditions />
                    </section>

                    {/* <!--CONTACT US--> */}
                    <section class="section-form" id="contact">
                        <ContactUs />
                    </section>
                </main>

            </div>
        );
    }
}

export default Home;