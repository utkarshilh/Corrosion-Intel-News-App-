var mysql = require('mysql');
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const { response } = require('express');

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }))


const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "Ishaan@123",
    database: "intel",



})

app.listen(3002, () => {
    console.log("Running at port 3002 ")
})

app.get('/', (req, res) => {
    res.send("hello")
    console.log("hello how are you");
})


// saving news
app.post('/api/save', (req, res) => {


    const title = req.body.title;
    const description = req.body.description;
    const imgUrl = req.body.imgUrl;
    const readMoreUrl = req.body.url;

    const author = req.body.author;

    const savequery = "insert into savednews(title,imgUrl, readMoreUrl, author, description) VALUES(?,?,?,?,?);";

    db.query(savequery, [title, imgUrl, readMoreUrl, author, description], (err, result) => {
        if (err) {
            const errStatus = {
                code: 404,
                message: "something went wrong",
                err: err
            }
            res.send(errStatus);
        }
        else {
            const successStatus = {
                code: 200,
                message: "Successfully inserted"
            }
            res.send(successStatus);

        }

    })



})
