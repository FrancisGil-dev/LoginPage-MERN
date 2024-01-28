const express = require('express');
const axios = require('axios');
const cors = require('cors');
const PORT = 8080;
//test
const app = express();
app.listen(PORT, () => console.log(`server is listening to port: http://localhost:${PORT}`))
app.use ('/', (req, res) =>  res.json)

