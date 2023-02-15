import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

import { useEffect, useState } from "react";

import Axios from 'axios';


export default function NewsItem(props) {

    let url;
    let imgUrl;
    let title;
    let description;
    let author;
    const handleButtonClick = () => {
        // Update the variable state first
        updateVariableState()
            .then(() => {
                // Once the variable state is updated, make the axios request
                Axios.post("http://localhost:3002/api/save", {
                    imgUrl: imgUrl,
                    title: title,
                    description: description,
                    url: url,
                    author: author

                }).then((props) => {

                    if (props.data.code == 404) {

                        alert(props.data.message + "\n Error Code" + props.data.err.code)
                    }
                    else
                        alert(props.data.message);

                });
            })
            .catch((error) => {
                // Handle the error if the variable state update fails
                console.error(error);
            });
    };

    const updateVariableState = () => {

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                imgUrl = props.image;
                title = props.title;
                description = props.description;
                url = props.url;
                author = props.author;

                // Resolve the promise to indicate that the variable state update is complete
                resolve();
            }, 100);
        });
    };



    return (
        <div className='my-3'>
            <div className="card " >
                <img src={props.image ? props.image : "http://drive.google.com/uc?export=view&id=1Fv8_ZL_N_Byz83RmKHP9XaJiZIUpF6UW"} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.description ? props.description : "Description not present please press ReadMore to jump to the main page"}</p>
                    <p className="card-text"> <small className="text-muted">By {props.author ? props.author : "Unknown"} on {new Date(props.date).toGMTString()}</small> </p>
                    <a className="btn btn-primary mx-3" onClick={handleButtonClick}>Save</a>
                    {/* <button className='btn btn-primary' onClick={save}> click here</button> */}
                    <a href={props.url} target="_blank" className="btn btn-primary">Read More</a>

                </div>
            </div>
        </div>
    )
}
