import styles from './DescriptionSide.module.css';

const DescriptionSide = props => {
  return (
    <section className={`${styles['description-side']} ${props.className}`}>
      {props.children}
    </section>
  );
};

export default DescriptionSide;
