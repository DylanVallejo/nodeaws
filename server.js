const express = require('express');

const app = express();


app.get('/', (req, res) =>('<h1>Express con html /h1>'));


app.listen(3000);
console.log("server is running on port 3000");