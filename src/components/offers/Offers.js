import React from "react";
import { offerData } from "./offerData";

const Offers = () => {
    return (
        <div>
            <div class="row">
                <h2>Offers</h2>
            </div>
            <div className="row">
                {offerData.map((offData) => {
                    return (
                        <div class="col span-1-of-3">
                            <div class="plan-box js--wp-4">
                                <div>
                                    <h3>{offData.Title}</h3>
                                </div>
                                <div>
                                    <ul>
                                        <li><i class="ion-ios-checkmark-empty icon-small"></i>{offData.Place}</li>
                                        <li><i class="ion-ios-checkmark-empty icon-small"></i>{offData.Type}</li>
                                        <li><i class="ion-ios-checkmark-empty icon-small"></i>{offData.Dinner}</li>
                                        <li><i className={offData.Title === "Basic" ? "ion-ios-close-empty icon-small" : "ion-ios-checkmark-empty icon-small"}></i>{offData.Tickets}</li>
                                        <li><i class="ion-ios-checkmark-empty icon-small"></i>{offData.Days}</li>
                                        <li><i class="ion-ios-checkmark-empty icon-small"></i>{offData.People}</li>
                                    </ul>
                                </div>
                                <div>
                                    <p class="plan-offers">{offData.Date}</p>
                                    <p class="plan-offers">{offData.Dest}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            {/* <div class="row">
                <div class="col span-1-of-3">
                    <div class="plan-box js--wp-4">
                        <div>
                            <h3>Basic</h3>
                        </div>
                        <div>
                            <ul>
                                <li><i class="ion-ios-checkmark-empty icon-small"></i>GOA Tour</li>
                                <li><i class="ion-ios-checkmark-empty icon-small"></i>3 Star Resort</li>
                                <li><i class="ion-ios-checkmark-empty icon-small"></i>Breakfast & Dinner</li>
                                <li><i class="ion-ios-close-empty icon-small"></i>Flight & Return Train Tickets</li>
                                <li><i class="ion-ios-checkmark-empty icon-small"></i>3 Days & 2 Nights</li>
                                <li><i class="ion-ios-checkmark-empty icon-small"></i>1 Couple (2 Adults)</li>
                            </ul>
                        </div>
                        <div>
                            <p class="plan-offers">Valid From 01 Dec 2021 To 31 Dec 2021</p>
                            <p class="plan-offers">No Tickets</p>
                        </div>
                    </div>
                </div>

                <div class="col span-1-of-3">
                    <div class="plan-box">
                        <div>
                            <h3>Standard</h3>
                        </div>
                        <div>
                            <ul>
                                <li><i class="ion-ios-checkmark-empty icon-small"></i>GOA Tour</li>
                                <li><i class="ion-ios-checkmark-empty icon-small"></i>3 Star Resort</li>
                                <li><i class="ion-ios-checkmark-empty icon-small"></i>Breakfast & Dinner</li>
                                <li><i class="ion-ios-checkmark-empty icon-small"></i>Return Train Tickets</li>
                                <li><i class="ion-ios-checkmark-empty icon-small"></i>3 Days & 2 Nights</li>
                                <li><i class="ion-ios-checkmark-empty icon-small"></i>1 Couple (2 Adults)</li>
                            </ul>
                        </div>
                        <div>
                            <p class="plan-offers">Valid From 01 Dec 2021 To 31 Dec 2021</p>
                            <p class="plan-offers">Train From Anand To Goa & Goa To Anand</p>
                        </div>
                    </div>
                </div>

                <div class="col span-1-of-3">
                    <div class="plan-box">
                        <div>
                            <h3>Premium</h3>
                        </div>
                        <div>
                            <ul>
                                <li><i class="ion-ios-checkmark-empty icon-small"></i>GOA Tour</li>
                                <li><i class="ion-ios-checkmark-empty icon-small"></i>3 Star Resort</li>
                                <li><i class="ion-ios-checkmark-empty icon-small"></i>Breakfast & Dinner</li>
                                <li><i class="ion-ios-checkmark-empty icon-small"></i>Flight & Return Train Tickets</li>
                                <li><i class="ion-ios-checkmark-empty icon-small"></i>3 Days & 2 Nights</li>
                                <li><i class="ion-ios-checkmark-empty icon-small"></i>1 Couple (2 Adults)</li>
                            </ul>
                        </div>
                        <div>
                            <p class="plan-offers">Valid from 01 Dec 2021 To 31 Dec 2021</p>
                            <p class="plan-offers">Flight From Ahemdabad To Goa</p>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    );
}

export default Offers;