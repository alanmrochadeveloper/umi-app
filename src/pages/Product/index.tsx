import styles from './index.less';
import { useParams, history, Link } from 'umi';

export default function Page() {
  const { id } = useParams<{ id: string }>();
  const { query } = history.location;
  const { code } = query as { code: string };
  const goHome = () => {
    history.push('/app/home');
  }

  const goBack = () => {
    history.goBack()
  }

  const goForward = () => {
    history.goForward()
  }
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

      <Link to="/app/home"><button>go to home</button></Link>
      <button onClick={goHome}>go home function</button>
      <button onClick={goBack}>go back</button>
      <button onClick={goForward}>go forward</button>
    </div>
  );
}
