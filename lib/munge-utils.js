export function formatLocation(data) {
  return data.map(city => {

    return {
      'formatted_query': city.display_name,
      'latitude': city.lat,
      'longitude': city.lon
    };
  });
}

export function formatWeather(data) {
  return data.data.map(city => {

    return {
      'forecast': city.weather.description,
      'time': city.valid_date
    };
  });
}