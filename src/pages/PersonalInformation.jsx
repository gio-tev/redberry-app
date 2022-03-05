import Card from '../components/card/Card';
import InputSide from '../components/input-side/InputSide';
import DescriptionSide from '../components/description-side/DescriptionSide';
import Title from '../components/UI/Title';
import Description from '../components/UI/Description';
import PersonalInput from '../components/UI/PersonalInput';

import styles from './PersonalInformation.module.css';

const PersonalInformation = () => {
  return (
    <Card>
      <InputSide>
        <Title>{'Hey, Rocketeer, what are your coordinates?'}</Title>

        <div className={styles['inputs-container']}>
          <div className={styles.inputs}>
            <PersonalInput />
          </div>
        </div>
      </InputSide>

      <DescriptionSide>
        <Title>{'Redberry Origins'}</Title>
        <Description>
          {
            ' You watch “What? Where? When?” Yeah. Our founders used to play it. That’s where they got a question about a famous American author and screenwriter Ray Bradbury. Albeit, our CEO Gaga Darsalia forgot the exact name and he answered Ray Redberry. And at that moment, a name for a yet to be born company was inspired - Redberry 😇'
          }
        </Description>
      </DescriptionSide>
    </Card>
  );
};

export default PersonalInformation;
