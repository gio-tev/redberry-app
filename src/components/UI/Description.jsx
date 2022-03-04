import styles from './Description.module.css';

const Description = props => {
  return <p className={styles.description}>{props.children}</p>;
};

export default Description;
