const express = require('express');

const app = express();


app.get('/', (req, res) => {
    res.send ('Hello World express');
}
)

app.listen(8080);
console.log("server is running on port 8080");