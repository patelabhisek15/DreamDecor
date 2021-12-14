import React from 'react';

export default function Package(props) {
    return (
        
        <div className="col span-1-of-3 single_product">
            <div className="plan-box">
                <div>
                    <h3>{props.pack.title}</h3>
                </div>
                <div>
                    <ul>
                        <li><i class="ion-ios-checkmark-empty icon-small"></i>{props.pack.desc}</li>
                    </ul>
                </div>
                <div>
                    <p class="plan-price">₹ {props.pack.price}</p>
                </div>
            </div>
        </div>
        
    )
}
