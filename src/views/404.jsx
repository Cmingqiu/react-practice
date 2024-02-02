import { useInfoStore } from '../store';

export default function ErrorPage() {
  const infoStoreProxy = useInfoStore();
  return (
    <>
      <h1>404</h1>; infoStoreProxy:{infoStoreProxy.count}
    </>
  );
}
