import styles from './InputSide.module.css';

const InputSide = props => {
  return (
    <section className={`${styles['input-side']} placeholder`}>
      {props.children}
    </section>
  );
};

export default InputSide;
