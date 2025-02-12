import {Alert} from 'react-native';
import {API_KEY} from '@env';

export function getForestApi(data: {
  value: string;
  days?: number;
}): Promise<any> {
  return fetch(
    `https://api.weatherapi.com/v1/forecast.json?q=${data.value}&days=${data.days}&key=${API_KEY}&lang=pt`,
    {headers: {'Content-Type': 'application/json'}, method: 'GET'},
  )
    .then(res => res.json())
    .catch(error => {
      Alert.alert(error.message);
      return null;
    });
}

export function getSearchApi(
  data: {value: string},
  setSearch?: React.Dispatch<React.SetStateAction<any[]>>,
  setLoading?: React.Dispatch<React.SetStateAction<any>>,
) {
  if (setLoading) {
    setLoading(true);
  }

  fetch(
    `https://api.weatherapi.com/v1/search.json?q=${data.value}&key=${API_KEY}`,
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
        const cityRequests = data.map((city: any) => {
          return getForestApi({value: city.url, days: 6});
        });

        Promise.all(cityRequests)
          .then(responses => {
            if (setSearch) {
              setSearch(responses);
            }
          })
          .catch(error => Alert.alert(error.message))
          .finally(() => {
            if (setLoading) {
              setLoading(false);
            }
          });
      }
    })
    .catch(error => Alert.alert(error.message));
}
