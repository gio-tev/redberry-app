import Card from '../components/card/Card';
import InputSide from '../components/input-side/InputSide';
import DescriptionSide from '../components/description-side/DescriptionSide';
import Description from '../components/UI/Description';
import Title from '../components/UI/Title';
import CovidInput from '../components/UI/CovidInput';
import styles from './Covid.module.css';

const Covid = () => {
  return (
    <Card>
      <InputSide>
        <Title className={styles['custom-title']}>Covid Stuff</Title>

        <div className={styles['covid-container']}>
          <div className={styles.inputs}>
            <CovidInput />
          </div>
        </div>
      </InputSide>

      <DescriptionSide className={styles.side}>
        <Title className={styles['custom-title']}>
          Redberry Covid Policies
        </Title>
        <Description>
          As this infamous pandemic took over the world, we adjusted our working
          practices so that our employees can be as safe and comfortable as
          possible. We have a hybrid work environment, so you can either work
          from home or visit our lovely office on Sairme Street. If it was up to
          us, we would love you to see us in the office because we think
          face-to-face communications{' >'} Zoom meetings. Both on the fun and
          productivity scales.
        </Description>
      </DescriptionSide>
    </Card>
  );
};

export default Covid;
