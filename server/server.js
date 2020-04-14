require('dotenv').config();
const express = require('express'),
    app = express()
const {SERVER_PORT} = process.env;


PORT=SERVER_PORT
app.listen(PORT, () => console.log(`Magic is happening on port ${PORT}`))

