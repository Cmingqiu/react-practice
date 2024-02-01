import { proxy } from 'valtio';
import { useProxy } from 'valtio/utils';
export const infoStore = proxy({
  count: 10,
  list: [],
  // action
  changeCount(v) {
    infoStore.count = v;
  }
});

export const useInfoStore = () => useProxy(infoStore);
