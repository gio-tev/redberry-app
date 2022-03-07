import { useState, useRef, useContext } from 'react';
import { AppContext } from '../../store/AppContext';
import { useNavigate } from 'react-router-dom';
import Pagination from './Pagination';
import styles from './InsightsInput.module.css';

const InsightsInput = () => {
  const { dispatch } = useContext(AppContext);

  const [yesAttend, setYesAttend] = useState(false);

  const [attendDevNotChecked, setAttendDevNotChecked] = useState(false);
  const [noSpeakAboutValue, setNoSpeakAboutValue] = useState(false);
  const [noSpecialValue, setNoSpecialValue] = useState(false);

  const yesAttendRef = useRef();
  const noAttendRef = useRef();
  const speakAboutRef = useRef();
  const somethingSpecialRef = useRef();

  const navigate = useNavigate();

  const handleYesAttendClick = e => {
    if (e.target.checked) {
      setYesAttend(true);
    }
  };

  const handleBackwardClick = () => {
    navigate('/covid');
  };

  const handleForwardClick = () => {
    if (!yesAttendRef.current.checked && !noAttendRef.current.checked) {
      return setAttendDevNotChecked(true);
    }
    if (yesAttendRef.current.checked && !speakAboutRef.current.value) {
      return setNoSpeakAboutValue(true);
    }
    if (!somethingSpecialRef.current.value) {
      return setNoSpecialValue(true);
    }

    const modifiedInsightsDataForSend = {
      will_organize_devtalk: false,
      devtalk_topic: '',
      something_special: '',
    };

    if (yesAttendRef.current.checked)
      modifiedInsightsDataForSend.will_organize_devtalk = true;
    if (noAttendRef.current.checked)
      modifiedInsightsDataForSend.will_organize_devtalk = false;
    if (yesAttendRef.current.checked && speakAboutRef.current.value)
      modifiedInsightsDataForSend.devtalk_topic = speakAboutRef.current.value;
    if (somethingSpecialRef.current.value)
      modifiedInsightsDataForSend.something_special =
        somethingSpecialRef.current.value;

    dispatch({
      type: 'INSIGHTS_INPUT',
      payload: {
        will_organize_devtalk:
          modifiedInsightsDataForSend.will_organize_devtalk,
        devtalk_topic: modifiedInsightsDataForSend.devtalk_topic,
        something_special: modifiedInsightsDataForSend.something_special,
      },
    });
    // Send data to global state////////////////////////////////////////////////
    navigate('/submit');
  };

  return (
    <form className={styles.form} noValidate>
      <div className={styles.inputs}>
        <h2>Would you attend Devtalks and maybe also organize your own?</h2>
        <div className={styles['input-label-container']}>
          <input
            onClick={handleYesAttendClick}
            ref={yesAttendRef}
            type="radio"
            id="yes"
            name="Devtalks"
          />
          <label htmlFor="yes">Yes</label>
        </div>

        <div className={styles['input-label-container']}>
          <input ref={noAttendRef} type="radio" id="no" name="Devtalks" />
          <label htmlFor="no">No</label>
        </div>
        {attendDevNotChecked && <p>Please select at least one option</p>}
      </div>

      {yesAttend && (
        <div className={styles.inputs}>
          <h2>What would you speak about at Devtalk?</h2>
          <textarea ref={speakAboutRef} placeholder="I would..." id="1" />
          {noSpeakAboutValue && (
            <p className={styles.paragraph}>
              Please tell us what would you speak about
            </p>
          )}
        </div>
      )}

      <div className={styles.inputs}>
        <h2>Tell us something special</h2>
        <textarea ref={somethingSpecialRef} placeholder="I..." id="2" />
        {noSpecialValue && (
          <p className={styles.paragraph}>
            Please tell us something about yourself
          </p>
        )}
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
