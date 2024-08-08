import AsyncStorage from '@react-native-async-storage/async-storage';

// Função para armazenar dados
export const storeData = async (key:string, value:string) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    console.error('Failed to save data', e);
  }
};

// Função para recuperar dados
export const getData = async (key:string) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.error('Failed to fetch data', e);
  }
};

// Função para remover dados
export const removeData = async (key:string) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    console.error('Failed to remove data', e);
  }
};
