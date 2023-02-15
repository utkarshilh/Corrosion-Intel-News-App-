
import React, { useEffect, useState } from "react";
import Axios from 'axios';


import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

import NewsItem from "./NewsItem";

export default function News(props) {

    let tt = false;



    const [news, setNews] = useState([]);



    useEffect(() => {
        console.log("i was executed")

        var url;

        if (props.category == "saved") {
            url = "http://localhost:3002/api/getnews"
            tt = true;

        }
        else if (props.category == "everything")
            url = "https://newsapi.org/v2/everything?q=Apple&from=2023-02-14&sortBy=popularity&apiKey=42ddb4056aeb4d4ab37062f04002f663"
        else
            url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=42ddb4056aeb4d4ab37062f04002f663`;
        Axios.get(url).then(
            (response) => {
                console.log(response.data.articles.urlToImage)

                setNews(response.data.articles);

            }
        );
    }, []);

    return (
        <div className="container my-3">

            <h1>News App</h1>
            <div className="row">
                {news.map((val) => {
                    console.log(val);
                    return (
                        <div className="col-md-4" key={val.url} >

                            <NewsItem title={val.title} image={val.urlToImage || val.imgUrl} description={(val.description ? val.description.slice(0, 35) : "")} author={val.author} date={val.publishedAt} url={val.url || val.readMoreUrl} gh={tt} />
                        </div>

                    )
                })}


            </div>
        </div>
    )
}
