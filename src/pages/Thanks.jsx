import styles from './Thanks.module.css';

const Thanks = () => {
  return (
    <div className={styles.container}>
      <h1>
        Thanks for Joining <span className={styles.smile}>😊</span>
      </h1>
    </div>
  );
};

export default Thanks;
