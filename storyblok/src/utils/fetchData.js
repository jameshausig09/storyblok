const fetchData = async (city) => {
  const response = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=cc1d994a6dca465698f104412242806&units=metric`
  );
  const data = await response.json();
  return data;
};
export default fetchData;
