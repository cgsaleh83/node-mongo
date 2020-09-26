const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')


const app = express();
app.use(cors());
app.use(bodyParser.json())

        

app.get('/', (req, res) => {
    
    res.send('Hei My Name Is Sajjat Hossain')
});

app.get('/fruit/banana', (req, res) => {
    const fruit =[
        {
            fruit: 'apple',
            quantity: 500,
            price: 150
        },
        {
            fruit: 'mango',
            quantity: 400,
            price: 120
        },
        {
            fruit: 'banana',
            quantity: 600,
            price: 600
        },
    ]
    res.send(fruit)
})


//daynamic data
const users = ['sajjat', 'saleh', 'taaingel'];
app.get('/users/:id', (req, res) => {

    const id = req.params.id;   //    console.log(req.query.sort);
   const name =users[id];
   res.send({name, id})
})

//post 
app.post('/addUser', (req, res) => {
    //saved to database
    const user = req.body;
    user.id = 55;
    res.send(user);
})

//hosting 
app.listen(2000, () => console.log('listening to port 2000'))