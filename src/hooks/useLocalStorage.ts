import { useState } from "react";
import StorageSetterFunction from "types/StorageSetterFunction";

const useLocalStorage = <T>(initialValue: T, key: string): [T, (newItemValue: T | StorageSetterFunction<T>) => void] => {
  const [currentStorageItemvalue, setCurrentStorageItemvalue] = useState<T>(() => {
    const itemFromStorage = localStorage.getItem(key);
    
    if (itemFromStorage) {
      try {
        const parsedValue = JSON.parse(itemFromStorage) as T;

        return parsedValue;
      } catch {
        return itemFromStorage as T;
      }
    }

    const stringifiedInitialValue: string = typeof initialValue !== 'string' ? JSON.stringify(initialValue) : initialValue
    
    localStorage.setItem(key, stringifiedInitialValue);

    return initialValue;
  });

  const setNewItemInStorage = (newItemValue: T | StorageSetterFunction<T>) => {
    let newValue = typeof newItemValue === 'function'
      ? (newItemValue as StorageSetterFunction<T>)(currentStorageItemvalue)
      : newItemValue as T;

    localStorage.setItem(key, JSON.stringify(newValue));

    setCurrentStorageItemvalue(newItemValue as T)
  }

  return [currentStorageItemvalue, setNewItemInStorage];
}

export default useLocalStorage;
