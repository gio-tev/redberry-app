import { useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';

import styles from './Submit.module.css';

const Submit = () => {
  const [thanks, setThanks] = useState(false);
  const navigate = useNavigate();

  const handleSubmitData = () => {
    setThanks(true);

    setTimeout(() => {
      navigate('/');
    }, 3000);
  };

  if (thanks) {
    return <h1>Thanks</h1>;
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
