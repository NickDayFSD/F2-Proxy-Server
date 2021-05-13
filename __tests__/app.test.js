import supertest from 'supertest';
import { geo } from '../data/geo-data.js';
import { weather } from '../data/weather-data.js';
import {
  formatLocation,
  formatWeather
} from '../lib/munge-utils.js';

describe('API Data Munging', () => {

  const expectedGeo = [
    {
      'formatted_query': 'Portland, Multnomah County, Oregon, USA',
      'latitude': '45.5202471',
      'longitude': '-122.6741949',
    },
    {
      'formatted_query': 'Portland, Cumberland County, Maine, USA',
      'latitude': '43.6610277',
      'longitude': '-70.2548596',
    },
    {
      'formatted_query': 'Portland, San Patricio County, Texas, USA',
      'latitude': '27.8768086',
      'longitude': '-97.3233874',
    }
  ];

  it('munges location data', async () => {
    const output = formatLocation(geo);

    expect(output).toEqual(expectedGeo);
  });

  const expectedWeather = [
    {
      'forecast': 'Broken clouds',
      'time': '2021-05-12'
    },
    {
      'forecast': 'Few clouds',
      'time': '2021-05-13'
    },
    {
      'forecast': 'Scattered clouds',
      'time': '2021-05-14'
    },
  ];

  it('munges weather data', async () => {
    const output = formatWeather(weather);

    expect(output).toEqual(expectedWeather);
  });
});