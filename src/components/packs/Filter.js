import React from 'react';
import { FilterData } from './FilterData';


export default function Filter({ cat, filteringName }) {


    return (
        <div>
            <h2>Packages</h2>
            <div class="center">
                <select class="custom-select sources" value={cat} onChange={filteringName} >
                    <option value="select" hidden>Select</option>
                    {FilterData.map((filData) => {
                        return (
                            <option value={filData.value}>{filData.label}</option>
                        )
                    })}
                </select>

            </div>
        </div>
    )
}
