import { useState, useContext } from 'react';
import { AppContext } from '../store/AppContext';
import { Link, useNavigate } from 'react-router-dom';
import Thanks from './Thanks';
import styles from './Submit.module.css';

const Submit = () => {
  const { state } = useContext(AppContext);
  const [submitted, setSubmitted] = useState(false);

  const skill = structuredClone(state);

  for (const [key, value] of Object.entries(skill)) {
    if (value === '') delete skill[key];
  }

  const navigate = useNavigate();

  const handleSubmitData = () => {
    const sendSkill = async () => {
      const response = await fetch(
        'https://bootcamp-2022.devtest.ge/api/application',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'Accept: application/json',
          },
          body: JSON.stringify(skill),
        }
      );
      console.log(response);
    };

    sendSkill();

    setSubmitted(true);

    setTimeout(() => {
      window.localStorage.clear();
      navigate('/');
    }, 3000);
  };

  if (submitted) {
    return <Thanks />;
  }

  return (
    <div className={styles.submit}>
      <button
        onClick={handleSubmitData}
        className={styles['btn-primary']}
        type="button"
      >
        Submit
      </button>
      <Link to="/redberrian-insights" className={styles.link}>
        Go back
      </Link>
    </div>
  );
};

export default Submit;
