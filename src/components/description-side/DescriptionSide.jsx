import styles from './DescriptionSide.module.css';

const DescriptionSide = props => {
  return (
    <div className={`${styles['description-side']} ${props.className}`}>
      {props.children}
    </div>
  );
};

export default DescriptionSide;
