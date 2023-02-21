
import React, { useEffect, useState } from "react";
import Axios from 'axios';


import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

import NewsItem from "./NewsItem";

export default function News(props) {

    console.log("props :" + JSON.stringify(props));


    let tt = false;



    const [news, setNews] = useState([]);



    useEffect(() => {

        var url;

        if (props.category == "saved") {
            url = "http://localhost:3002/api/getnews"
            tt = true;

        }
        else if (props.category == "everything") {
            url = "https://newsapi.org/v2/everything?q=Apple&from=2023-02-14&sortBy=popularity&apiKey=42ddb4056aeb4d4ab37062f04002f663"
            tt = false;
        }
        else {
            url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=42ddb4056aeb4d4ab37062f04002f663`;
            tt = false;
        }
        Axios.get(url).then(
            (response) => {
                setNews(response.data.articles);

            }
        );
    }, []);

    return (
        <div className="container my-3">

            <h1>Top Headline </h1>
            <div className="row">
                {news.map((val) => {

                    return (
                        <div className="col-md-4" key={val.url} >

                            <NewsItem title={val.title} image={val.urlToImage || val.imgUrl} description={(val.description ? val.description.slice(0, 35) : "")} author={val.author} date={val.publishedAt} url={val.url || val.readMoreUrl} gh={tt} ss={props.ss} />
                        </div>

                    )
                })}


            </div>
        </div>
    )
}
