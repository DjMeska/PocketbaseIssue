const express = require('express');
const axios = require('axios');
const app = express();


app.post('/control', async (req, res) => {
  const requestData = req.body;

  try {
    const response = await axios.post('http://127.0.0.1:8090/api/collections/controller/records', {isOn: true, time: 123});

    const responseData = response.data;

    res.send(responseData);
  } catch (error) {

    res.status(500).send('Error making request');
  }
});

app.listen(3000, () => console.log('Server listening on port 3000'));