import { useInfoStore } from '../store';
import styles from '@/styles/404.module';

export default function ErrorPage() {
  const infoStoreProxy = useInfoStore();
  console.log(styles);
  return (
    <>
      <h1 className={styles['not-found']}>404</h1>
      infoStoreProxy: {infoStoreProxy.count}
    </>
  );
}
