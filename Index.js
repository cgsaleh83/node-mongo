const express = require('express');
const app = express();

// const rootCall = (req, res) => res.send('thank you');
        //
app.get('/', (req, res) => {
    res.send('Hei my name is Sajjat Hossain')
})

app.listen(2000, () => console.log('listening to port 2000'))