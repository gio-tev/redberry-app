import styles from './DescriptionSide.module.css';

const DescriptionSide = props => {
  return <div className={styles['description-side']}>{props.children}</div>;
};

export default DescriptionSide;
