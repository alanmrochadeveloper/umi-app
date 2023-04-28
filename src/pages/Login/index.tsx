import styles from './index.less';
import LoginForm from './LoginForm';
export default function Page() {
  return (
    <div className={styles.container}>
      <LoginForm />
      <h1 className={styles.title}>Page /Login/index</h1>
    </div>
  );
}
