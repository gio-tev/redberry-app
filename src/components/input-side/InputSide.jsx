import Title from '../UI/Title';
import Input from '../UI/Input';
import Pagination from '../UI/Pagination';

import styles from './InputSide.module.css';

const InputSide = props => {
  return (
    <div className={styles['input-side']}>
      <Title>Hey, Rocketeer, what are your coordinates?</Title>

      <div className={styles['inputs-container']}>
        <div className={styles.inputs}>
          <Input
            type={'text'}
            id={'first-name'}
            placeholder={'First Name'}
            required={true}
          />
          <Input
            type={'text'}
            id={'last-name'}
            placeholder={'Last Name'}
            required={true}
          />
          <Input
            type={'email'}
            id={'email'}
            placeholder={'E Mail'}
            required={true}
          />
          <Input
            type={'tel'}
            id={'tel'}
            placeholder={'+995 5__ __ __ __'}
            required={false}
          />
        </div>
      </div>

      <Pagination onBack={props.onBack} onNext={props.onNext} />
    </div>
  );
};

export default InputSide;
