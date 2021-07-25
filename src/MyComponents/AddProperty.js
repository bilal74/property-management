import React, { useState } from 'react'

export const AddProperty = (props) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [area, setArea] = useState("");

    const submit = (e) => {
        e.preventDefault();
        if(!title || !desc || !area){
            alert("Input can not be blank");
        }
        else{
            props.addProperty(title, desc, area);
        }
    }
    return (
        <div className="container my-3">
            <h1 className="text-center">Add a Property</h1>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Name</label>
                    <input type="text" value={title} onChange={(e) =>setTitle(e.target.value)} className="form-control" id="title" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Description</label>
                    <input type="text" value={desc} onChange={(e) =>setDesc(e.target.value)} className="form-control" id="desc" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="area" className="form-label">Area</label>
                    <input type="text" value={area} onChange={(e) =>setArea(e.target.value)} className="form-control" id="area" aria-describedby="emailHelp" />
                </div>
                <button type="submit" className="btn btn-success">Add Property</button>
            </form>
        </div>
    )
}
