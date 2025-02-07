import {Alert} from 'react-native';
import {API_KEY} from '@env';

export function getForestApi(
  data: {value: string; data?: string; days?: number; hour?: number},
  setSearch?: React.Dispatch<React.SetStateAction<any>>,
  setLoading?: React.Dispatch<React.SetStateAction<any>>,
) {
  if (setLoading) {
    setLoading(true);
  }
  fetch(
    `https://api.weatherapi.com/v1/forecast.json?q=${data.value}&days=${data.days}&key=${API_KEY}&lang=pt`,
    {headers: {'Content-Type': 'application/json'}, method: 'GET'},
  )
    .then(res => res.json())
    .then(data => {
      if (data?.error) {
        Alert.alert(data?.error.message);
        if (setLoading) {
          setLoading(false);
        }
      } else {
        if (setSearch) {
          setSearch(data);
        }
        if (setLoading) {
          setLoading(false);
        }
      }
    })
    .catch(error => Alert.alert(error.message));
}
