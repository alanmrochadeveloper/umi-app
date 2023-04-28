import styles from './index.less';
import { useParams, history } from 'umi';
import { useEffect } from 'react';

export default function Page() {
  const { id } = useParams<{ id: string }>();
  const { query } = history.location;
  const { code } = query as { code: string };
  return (
    <div>
      <h1 className={styles.title}>Page /Product/index</h1>
      <div>
        <span>id: </span>
        <span>{id}</span>
      </div>
      <div>
        <span>code: </span>
        <span>{code}</span>
      </div>
    </div>
  );
}
