// import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Pagination from './Pagination';
import styles from './InsightsInput.module.css';

const InsightsInput = () => {
  const navigate = useNavigate();

  const handleBackwardClick = () => {
    navigate('/covid');
  };

  const handleForwardClick = () => {
    // Send data to global state////////////////////////////////////////////////
    navigate('/submit');
  };
  //   ref={YesAttendRef}
  //   ref={NoAttendRef}
  return (
    <form className={styles.form} noValidate>
      <div className={styles.inputs}>
        <h2>Would you attend Devtalks and maybe also organize your own?</h2>
        <div className={styles['input-label-container']}>
          <input type="radio" id="yes" name="Devtalks" />
          <label htmlFor="yes">Yes</label>
        </div>

        <div className={styles['input-label-container']}>
          <input type="radio" id="no" name="Devtalks" />
          <label htmlFor="no">No</label>
        </div>
      </div>

      <div className={styles.inputs}>
        <h2>What would you speak about at Devtalk?</h2>
        <textarea placeholder="I would..." id="1" />
      </div>

      <div className={styles.inputs}>
        <h2>Tell us something special</h2>
        <textarea placeholder="I..." id="2" />
      </div>

      <Pagination
        className={styles['custom-pagination']}
        onBack={handleBackwardClick}
        onNext={handleForwardClick}
      />
    </form>
  );
};

export default InsightsInput;
