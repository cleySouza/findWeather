import {Alert} from 'react-native';

export function getSearchWeather(
  data: {value: string},
  setSearch: React.Dispatch<React.SetStateAction<any>>,
  setLoading: React.Dispatch<React.SetStateAction<any>>,
) {
  fetch(
    `https://api.weatherapi.com/v1/search.json?q=${data?.value}&key=502cad18b6ef4da599a43808250402`,
    {headers: {'Content-Type': 'application/json'}, method: 'GET'},
  )
    .then(response => response.json())
    .then(data => {
      if (data?.error) {
        Alert.alert(data?.error.message);
        setLoading(false);
      } else {
        setSearch(data);
        setLoading(false);
      }
    })

    .catch(error => Alert.alert(error.message));
}

export function getForestApi(
  data: {value: string; data?: string; days?: number; hour?: number},
  setWeatherData: React.Dispatch<React.SetStateAction<any>>,
  setLoading: React.Dispatch<React.SetStateAction<any>>,
) {
  console.log('getForest api: ', JSON.stringify(data, null, 2));
  setLoading(true);

  fetch(
    `https://api.weatherapi.com/v1/forecast.json?q=${data.value}&days=${data.days}&key=502cad18b6ef4da599a43808250402&lang=pt`,
    {headers: {'Content-Type': 'application/json'}, method: 'GET'},
  )
    .then(res => res.json())
    .then(data => {
      if (data?.error) {
        Alert.alert(data?.error.message);
        setLoading(false);
      } else {
        setWeatherData(data);
        setLoading(false);
      }
    })
    .catch(error => Alert.alert(error.message));
}
