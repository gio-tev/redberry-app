import { useState, useContext } from 'react';
import { AppContext } from '../../store/AppContext';
import { Link, useNavigate } from 'react-router-dom';
import Thanks from '../thanks/Thanks';
import styles from './Submit.module.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Submit = () => {
  const { state } = useContext(AppContext);
  const [submitted, setSubmitted] = useState(false);
  const [hasError, setHasError] = useState('');

  const skill = structuredClone(state);

  for (const [key, value] of Object.entries(skill)) {
    if (value === '') delete skill[key];
  }

  const navigate = useNavigate();

  const handleSubmitData = () => {
    const sendSkill = async () => {
      try {
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
        if (!response.ok) {
          throw new Error();
        }
        setSubmitted(true);
      } catch (error) {
        setHasError('Something went wrong, please try again.');
      }
    };

    sendSkill();

    setTimeout(() => {
      window.localStorage.clear();
      navigate('/');
    }, 3000);
  };

  if (hasError) {
    toast.error(hasError, {
      position: toast.POSITION.TOP_CENTER,
      toastId: 2,
      autoClose: 2000,
      style: {
        color: '#fe3b1f',
        height: '100px',
        textAlign: 'center',
        fontSize: '18px',
        fontFamily: 'Montserrat',
        fontWeight: 'bold',
      },
    });
  }

  if (!hasError && submitted) {
    return <Thanks />;
  }

  return (
    <div className={styles.submit}>
      <ToastContainer style={{ width: '500px' }} />
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
