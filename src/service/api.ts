import {Alert} from 'react-native';
import {API_KEY} from '@env';

export function getForestApi(
  data: {value: string; days?: number},
): Promise<any> {
  return fetch(
    `https://api.weatherapi.com/v1/forecast.json?q=${data.value}&days=${data.days}&key=${API_KEY}&lang=pt`,
    { headers: { 'Content-Type': 'application/json' }, method: 'GET' }
  )
    .then(res => res.json())
    .catch(error => {
      Alert.alert(error.message);
      return null;  // Retorna null em caso de erro
    });
}

export function getSearchApi(
  data: {value: string},
  setSearch?: React.Dispatch<React.SetStateAction<any[]>>,  // Agora, esperamos um array de cidades
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
        // Agora, vamos chamar o getForestApi para cada cidade e armazenar os dados detalhados
        const cityRequests = data.map((city: any) => {
          return getForestApi({ value: city.url, days: 6 }); // Chama getForestApi para cada cidade
        });

        // Espera todas as requisições de clima terminarem
        Promise.all(cityRequests)
          .then((responses) => {
            if (setSearch) {
              setSearch(responses); // Armazena os resultados completos das cidades
            }
          })
          .catch((error) => Alert.alert(error.message))
          .finally(() => {
            if (setLoading) {
              setLoading(false); // Desativa o loading ao final
            }
          });
      }
    })
    .catch(error => Alert.alert(error.message));
}


