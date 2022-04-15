import Card from '../../components/card/Card';
import InputSide from '../../components/input-side/InputSide';
import DescriptionSide from '../../components/description-side/DescriptionSide';
import Description from '../../components/UI/description/Description';
import Title from '../../components/UI/title/Title';
import styles from './RedberrianInsights.module.css';
import InsightsInput from '../../components/UI/insights-input/InsightsInput';

const RedberrianInsights = () => {
  return (
    <Card>
      <InputSide>
        <Title className={styles['custom-title']}>What about you?</Title>

        <div className={styles['insights-container']}>
          <div className={styles.inputs}>{<InsightsInput />}</div>
        </div>
      </InputSide>

      <DescriptionSide>
        <Title className={styles['custom-title']}>Redberrian Insights</Title>
        <Description>
          We were soo much fun before the pandemic started! Parties almost every
          weekend and lavish employee birthday celebrations! Unfortunately,
          covid ruined that fun like it did almost everything else in the world.
          But we try our best to zhuzh it up a bit. For example, we host
          biweekly Devtalks where our senior and lead developers talk about
          topics they are passionate about. Previous topics have included Web3,
          NFT, Laravel 9, Kubernetes, etc. We hold these talks in the office but
          you can join our Zoom broadcast as well. Feel free to join either as
          an attendee or a speaker!
        </Description>
      </DescriptionSide>
    </Card>
  );
};

export default RedberrianInsights;
