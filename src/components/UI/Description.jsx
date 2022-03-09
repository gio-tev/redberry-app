import styles from './Description.module.css';

const Description = props => {
  return <div className={styles.description}>{props.children}</div>;
};

export default Description;
