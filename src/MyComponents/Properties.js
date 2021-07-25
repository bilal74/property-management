import React from 'react';
import { PropertyList } from './PropertyList';

export const Properties = (props) => {
    return (
            <div className="container">
            <h1 className="text-center my-3">Properties List</h1>
            {props.property.length === 0? "No properties to display" :
            props.property.map((property1)=>{
                return <PropertyList property1={property1} key={property1.sno} onDelete={props.onDelete}/>
            })
            }
            </div>
    )
}
