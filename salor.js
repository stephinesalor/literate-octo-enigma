async function getWeather(city) {
  const mockData = { temp: "24°C", condition: "Sunny" };
  return `${city}: ${mockData.temp}, ${mockData.condition}`;
}

getWeather("Tokyo").then(console.log);