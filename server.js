const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// API to receive GPS data
app.post('/api/gps', (req, res) => {
  const { latitude, longitude } = req.body;
  console.log(`Received Latitude: ${latitude}, Longitude: ${longitude}`);
  res.send({ status: 'Data received', latitude, longitude });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
