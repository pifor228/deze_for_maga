import { useEffect, useState } from "react";

function readValue(key, initialValue) {
  try {
    const storedValue = window.localStorage.getItem(key);
    return storedValue === null ? initialValue : JSON.parse(storedValue);
  } catch (error) {
    console.error(`Не удалось загрузить данные "${key}" из localStorage.`, error);
    return initialValue;
  }
}

export default function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => readValue(key, initialValue));

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(`Не удалось сохранить данные "${key}" в localStorage.`, error);
    }
  }, [key, value]);

  return [value, setValue];
}