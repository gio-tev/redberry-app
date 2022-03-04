import { Link, useNavigate } from 'react-router-dom';
import Button from '../components/UI/Button';
import rocketman from '../assets/rocketman.png';
import styles from './Welcome.module.css';
// import Title from '../UI/Title';

const Welcome = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/personal-information');
  };

  return (
    <div className={styles.welcome}>
      <h1 className={styles['title-welcome']}>Welcome Rocketeer !</h1>
      {/* <Title className={styles.title}>Welcome Rocketeer !</Title> */}
      <Button onClick={handleClick} className={styles['btn-primary']}>
        Start Questionnaire
      </Button>
      <Link to="/submitted-applications" className={styles.link}>
        Submitted Applications
      </Link>
      <img src={rocketman} alt="rocketman" />
    </div>
  );
};

export default Welcome;
