const express = require('express');
const app = express();
const port = 3030;
const bodyParser = require('body-parser');
const messagesCtrl = require('./controllers/messages')


let messages = [];


app.use(bodyParser.json());



app.get('/api/msg', messagesCtrl.list);
app.get('/api/msg/:id', messagesCtrl.read)
app.post('/api/msg', messagesCtrl.create);
app.put('/api/msg/:id', messagesCtrl.update)
app.delete('/api/msg/:id', messagesCtrl.delete)


                    // Request / Response
app.get('/api/msg', (req, res) => {
    console.log('I\'ve been hit');
    console.log(req.url);
    res.send('Greetings');
});

// 3 ways to get info into a server: parameters, querys, body

// : params required for endpoint to work

app.get('/api/msg/:name/:message', (req, res) => {
    console.log(`${req.params.name} said ${req.params.message}`)
    res.send('Thanks for participating');
})


app.get('/api/msg/:name', (req, res) => {
    console.log(req.query);
    if(typeof req.query.exclamation === "string"){
        console.log(`${req.params.name} yelled ${req.query.exclamation.toUpperCase()}`)
        res.status(200).send('THANKS FOR PARTICIPATING')
    }else{
        res.status(400).send('Hey there was an error, please fix')
    }
})



//axios.post('/api/msg')

app.listen(port, () => {
    console.log("listening to port: " + port);
})

