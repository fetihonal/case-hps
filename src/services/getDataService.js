import { useEffect, useState } from 'react';
import axios from 'axios';

export default function useGetData() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get('https://61c6c66f9031850017547223.mockapi.io/api/v1/products',)
      .then(function (response) {
        setData(response.data)
      })
      .catch(function (error) {
      });
  }, []);

  return { data };
}
