import Title from '../UI/Title';
import Description from '../UI/Description';
import styles from './DescriptionSide.module.css';

const DescriptionSide = () => {
  return (
    <div className={styles['description-side']}>
      <Title>Redberry Origins</Title>
      <Description>
        You watch “What? Where? When?” Yeah. Our founders used to play it.
        That’s where they got a question about a famous American author and
        screenwriter Ray Bradbury. Albeit, our CEO Gaga Darsalia forgot the
        exact name and he answered Ray Redberry. And at that moment, a name for
        a yet to be born company was inspired - Redberry 😇
      </Description>
    </div>
  );
};

export default DescriptionSide;
