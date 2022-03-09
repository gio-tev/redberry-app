import styles from './DescriptionSide.module.css';

const DescriptionSide = props => {
  // return <div className={styles['description-side']}>{props.children}</div>;
  // console.log(window.scrollY);
  return (
    <div
      className={styles['description-side']}
      // style={{ height: `${window.innerHeight}px` }}
    >
      {props.children}
    </div>
  );
};

export default DescriptionSide;
