const express = require ('express');
const app = express();
const cors = require('cors');
const todorouters = require ("./routes/todoroutes");


app.use(cors({ origin: '*' }));
app.use(express.json());
app.use ("/todos", todorouters);


app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
