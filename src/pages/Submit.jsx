import { useState, useContext } from 'react';
import { AppContext } from '../store/AppContext';
import { Link, useNavigate } from 'react-router-dom';
import Thanks from './Thanks';
import styles from './Submit.module.css';

const Submit = () => {
  const { state } = useContext(AppContext);
  console.log(state);
  const [thanks, setThanks] = useState(false);
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
          body: JSON.stringify(state),
        }
      );
      console.log(response);
    };
    sendSkill();

    // send data to API here///////////////////////////////////////////////////////

    setThanks(true);

    // setTimeout(() => {
    //   navigate('/');
    // }, 3000);
  };

  if (thanks) {
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
