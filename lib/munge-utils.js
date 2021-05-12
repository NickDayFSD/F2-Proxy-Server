export function formatLocation(data) {
  return data.map(city => {

    return {
      'formatted_query': city.display_name,
      'latitude': city.lat,
      'longitude': city.lon
    };
  });
}