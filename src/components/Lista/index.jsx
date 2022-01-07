import { React, useEffect, useState } from 'react';
import { isLocalStorageEmpty } from '../../assets/storageFunctions';
import Elemento from '../Elemento';
import datas from './data.json';

let values;
let level = 0;
let position = -1;
let cont = 0;

const Lista = () => {
  const [lista, setLista] = useState([]);
  useEffect(() => {
    function setData() {
      setLista(lista);
      localStorage.setItem('data', lista);
    }
    setData();
    isLocalStorageEmpty('data');
    isLocalStorageEmpty('sons');
    isLocalStorageEmpty('dads');
  }, [lista]);

  const rendering = (item) => {
    values = Object.entries(item)
    values = values[1][1]
    values = Object.entries(values)
    position++
    level = values[3][1]
    lista[cont] = [values];
    cont += 1;

    return values.map(([key, value]) => (
      typeof value === 'object' ? (
        Object.entries(value).map(rendering)
      ) : (
        <Elemento value={value} level={level} position={position} />
      )
    ));
  };
  return (<ul>{Object.entries(datas).map(rendering)}</ul>);
}

export default Lista;
