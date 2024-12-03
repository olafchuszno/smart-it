import { useState } from "react";
import StorageSetterFunction from "types/StorageSetterFunction";

const useLocalStorage = (initialValue: string, name: string): [string, (newItemValue: string | StorageSetterFunction) => void] => {
  const [currentStorageItemvalue, setCurrentStorageItemvalue] = useState(() => {
    const itemFromStorage = localStorage.getItem(name);
    
    if (!!itemFromStorage) {
      return itemFromStorage;
    }
    
    localStorage.setItem(name, initialValue);

    return initialValue;
  });

  const setNewItemInStorage = (newItemValue: string | StorageSetterFunction) => {
    const newValue = typeof newItemValue === 'function'
      ? newItemValue(currentStorageItemvalue)
      : newItemValue;

    localStorage.setItem(name, newValue);

    setCurrentStorageItemvalue(newItemValue)
  }

  return [currentStorageItemvalue, setNewItemInStorage];
}

export default useLocalStorage;
