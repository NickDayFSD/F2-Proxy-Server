import supertest from 'supertest';
import {
  geo
} from '../data/geo-data.js';
import {
  formatLocation
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
});