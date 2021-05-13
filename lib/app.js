/* eslint-disable no-console */
// import dependencies
import express from 'express';
import request from 'superagent';
import cors from 'cors';
import morgan from 'morgan';
import { formatLocation, formatWeather } from './munge-utils.js';

// make an express app
const app = express();

// allow our server to be called from any website
app.use(cors());
// read JSON from body of request when indicated by Content-Type
app.use(express.json());
// enhanced logging
app.use(morgan('dev'));

// heartbeat route
app.get('/', (req, res) => {
  res.send('Famous Cats API');
});

// API routes,
app.get('/location', async (req, res) => {
  // use SQL query to get data...
  try {

    const response = await request.get(`https://us1.locationiq.com/v1/search.php?key=${process.env.GEOCODING_API_KEY}&q=${req.query.search}&format=json`);

    const location = formatLocation(response.body);
    // send back the data
    res.json(location);
  }
  catch (err) {
    console.log(err.message);
    res.status(500).json({ error: err.message });
  }
});

// API routes,
app.get('/weather', async (req, res) => {
  // use SQL query to get data...
  try {

    const response = await request.get(`https://api.weatherbit.io/v2.0/forecast/daily?&lat=${req.query.latitude}&lon=${req.query.longitude}&key=${process.env.WEATHERBIT_API_KEY}`);

    const location = formatWeather(response.body);
    // console.log(location);
    // send back the data
    res.json(location);
  }
  catch (err) {
    console.log(err.message);
    res.status(500).json({ error: err.message });
  }
});

export default app;