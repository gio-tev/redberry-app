import Card from '../components/card/Card';
import InputSide from '../components/input-side/InputSide';
import DescriptionSide from '../components/description-side/DescriptionSide';
import Description from '../components/UI/Description';
import Title from '../components/UI/Title';
import styles from './TechnicalSkillset.module.css';
import TechnicalInput from '../components/UI/TechnicalInput';

const TechnicalSkillset = () => {
  return (
    <Card>
      <InputSide>
        <Title>Tell us about your skills</Title>

        <div className={styles['technical-container']}>
          <div className={styles.inputs}>
            <TechnicalInput className={styles['technical-button']} />
          </div>
        </div>
      </InputSide>
      <DescriptionSide>
        <Title>Redberry Origins</Title>
        <Description>
          As we said, Redberry has been on the field for quite some time now,
          and we have touched and embraced a variety of programming languages,
          technologies, philosophies, and frameworks. We are battle-tested in
          PHP Laravel Stack with Vue.js, refined in React, and allies with
          Serverside technologies like Docker and Kubernetes, and now we have
          set foot in the web3 industry.
        </Description>
      </DescriptionSide>
    </Card>
  );
};

export default TechnicalSkillset;
