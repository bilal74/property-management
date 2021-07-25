import React from 'react'

export const PropertyList = ({property1, onDelete}) => {
    return (
        <div>
            <h4>Name : {property1.name}</h4>
            <p>Description : {property1.desc}</p>
            <p>Area : {property1.area}</p>
            <button className="btn btn-sm btn-danger" onClick={()=>{onDelete(property1)}}>Delete</button>
            <hr />
        </div>
    )
}
