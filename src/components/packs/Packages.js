import React from 'react';
import Package from './Package';
import { ProductData } from './ProductData';

export default function Packages(props) {
    
    return (

        <div className='packages row'>

            {props.packages.map(pack => (
                <Package key={ProductData.id} pack={pack} />
            ))}
        </div>
    )
}
