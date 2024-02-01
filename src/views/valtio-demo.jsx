import { useInfoStore, infoStore } from '@/store';
import { useSnapshot } from 'valtio';

export default function () {
  const infoStoreProxy = useInfoStore();
  const infoStoreSnap = useSnapshot(infoStore);
  return (
    <>
      <h1>valtio</h1>
      <span
        className='count-btn'
        onClick={infoStoreProxy.changeCount.bind(
          null,
          Math.round(Math.random() * 10)
        )}>
        change
      </span>
      infoStoreProxy:{infoStoreProxy.count} <br />
      infoStore:{infoStore.count} <br />
      infoStoreSnap:{infoStoreSnap.count}
    </>
  );
}
