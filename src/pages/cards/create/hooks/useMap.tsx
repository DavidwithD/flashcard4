import { useEffect, useState } from "react";

export function useMap<K, V>(initKeys: K[] = [], initValues: V[] = []) {
  const initPairs = initKeys.map(
    (key, i) => [key, initValues[i]] as readonly [K, V | undefined]
  );
  const [map, setMap] = useState(new Map<K, V | undefined>(initPairs));
  const [currKey, setCurrKey] = useState<K>(initKeys[0]);
  const [currValue, setCurrValue] = useState<V | undefined>(initValues[0]);

  useEffect(() => {
    setMap(map);
  }, [map]);

  useEffect(() => {
    map.set(currKey, currValue);
  }, [currValue]);

  useEffect(() => {
    setCurrValue(map.get(currKey));
  }, [currKey]);

  const getAll = () => new Map(map);
  return { key: currKey, value: currValue, setCurrValue, setCurrKey, getAll };
}
