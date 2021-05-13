import supertest from 'supertest';
import { geo } from '../data/geo-data.js';
import { weather } from '../data/weather-data.js';
import { yelp } from '../data/yelp-data.js';
import {
  formatLocation,
  formatWeather,
  formatYelp
} from '../lib/munge-utils.js';

describe('API Data Munging', () => {

  const expectedGeo =
  {
    'formatted_query': 'Portland, Multnomah County, Oregon, USA',
    'latitude': '45.5202471',
    'longitude': '-122.6741949',
  };

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

  const expectedYelp = [
    {
      'name': 'Andina Restaurant',
      'image_url': 'https://s3-media1.fl.yelpcdn.com/bphoto/Ij9yv97Ch6NwKhNdpezRhw/o.jpg',
      'price': '$$$',
      'rating': 4.5,
      'url': 'https://www.yelp.com/biz/andina-restaurant-portland?adjust_creative=8hD_k9qlFe5AIAhZvQpRdw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=8hD_k9qlFe5AIAhZvQpRdw'
    },
    {
      'name': 'Lechon',
      'image_url': 'https://s3-media1.fl.yelpcdn.com/bphoto/1sE02Y1glmOvdRA54VIlYA/o.jpg',
      'price': '$$',
      'rating': 4.5,
      'url': 'https://www.yelp.com/biz/lechon-portland?adjust_creative=8hD_k9qlFe5AIAhZvQpRdw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=8hD_k9qlFe5AIAhZvQpRdw'
    },
    {
      'name': 'Luc Lac',
      'image_url': 'https://s3-media1.fl.yelpcdn.com/bphoto/azr6sD6VeJbdaiO2aKvSsw/o.jpg',
      'price': '$$',
      'rating': 4.0,
      'url': 'https://www.yelp.com/biz/luc-lac-portland-7?adjust_creative=8hD_k9qlFe5AIAhZvQpRdw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=8hD_k9qlFe5AIAhZvQpRdw'
    },
  ];

  it('munges Yelp data', async () => {
    const output = formatYelp(yelp);

    expect(output).toEqual(expectedYelp);
  });
});