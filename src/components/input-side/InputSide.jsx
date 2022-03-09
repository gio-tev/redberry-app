import styles from './InputSide.module.css';

const InputSide = props => {
  return (
    <div className={`${styles['input-side']} placeholder`}>
      {props.children}
    </div>
  );
};

export default InputSide;
