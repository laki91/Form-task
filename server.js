const express = require('express');
const cors = require('cors');
const mongojs = require('mongojs')

const db = mongojs('formDb', ['forms', 'data'])

const app = express()

app.use(express.json())
app.use(cors())

app.get('/form', (req, res) => {
    db.forms.find((err, docs) => {
        if(err){
            console.log(err); 
        }else{
            res.send(docs)
        }
    })
})

app.post('/data', (req, res) => {
    db.data.insert([req.body], 
        (err, data) => {
            if(err){
                console.log(err);
            }else{
                res.send('Succesfully')
            }
        }    
    )
})

app.listen(5000, ()=> {
    console.log('Server running on port 5000');
})

