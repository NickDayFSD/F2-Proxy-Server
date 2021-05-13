export function formatLocation(data) {
  const city = data[0];
  return {
    'formatted_query': city.display_name,
    'latitude': city.lat,
    'longitude': city.lon
  };

}

export function formatWeather(data) {
  return data.data.map(city => {

    return {
      'forecast': city.weather.description,
      'time': city.valid_date
    };
  });
}

export function formatYelp(data) {
  return data.businesses.map(city => {

    return {
      // name, image_url, price, rating, url
      'name': city.name,
      'image_url': city.image_url,
      'price': city.price,
      'rating': city.rating,
      'url': city.url
    };
  });
}