const fetchData = async (city) => {
  const response = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=c6f9c5276d42f0a32ce26ae3d1334051&units=metric`
  );
  const data = await response.json();
  return data;
};
export default fetchData;
