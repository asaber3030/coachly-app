import { Platform } from 'react-native';
import * as SecureStore from 'expo-secure-store';

const webStorage = {
  getItem: (key: string) => globalThis.localStorage?.getItem(key) ?? null,
  removeItem: (key: string) => globalThis.localStorage?.removeItem(key),
  setItem: (key: string, value: string) => globalThis.localStorage?.setItem(key, value),
};

export const secureStorage = {
  get: (key: string) => Platform.OS === 'web' ? webStorage.getItem(key) : SecureStore.getItemAsync(key),
  set: (key: string, value: string) => Platform.OS === 'web' ? Promise.resolve(webStorage.setItem(key, value)) : SecureStore.setItemAsync(key, value),
  remove: (key: string) => Platform.OS === 'web' ? Promise.resolve(webStorage.removeItem(key)) : SecureStore.deleteItemAsync(key),
};