import { Link, useNavigate } from 'react-router-dom';
import rocketman from '../assets/rocketman.png';
import styles from './Welcome.module.css';

const Welcome = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/personal-information');
  };

  return (
    <div className={styles.welcome}>
      <h1 className={styles['title-welcome']}>Welcome Rocketeer !</h1>

      <button onClick={handleClick} className={styles['btn-primary']}>
        Start Questionnaire
      </button>
      <Link to="/submitted-applications" className={styles.link}>
        Submitted Applications
      </Link>
      <img src={rocketman} alt="rocketman" />
    </div>
  );
};

export default Welcome;
