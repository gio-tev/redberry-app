import { useState, useRef, useContext } from 'react';
import { AppContext } from '../../../store/AppContext';
import { useNavigate } from 'react-router-dom';
import Pagination from '../pagination/Pagination';
import styles from './CovidInput.module.css';

const CovidInput = () => {
  const stored = JSON.parse(window.localStorage.getItem('covid'));

  const { dispatch } = useContext(AppContext);

  const [hadCovid, setHadCovid] = useState(false);
  const [vaccinated, setVaccinated] = useState(false);

  const [preferenceError, setPreferenceError] = useState(false);
  const [hadCovidError, setHadCovidError] = useState(false);
  const [whenCovidError, setWhenCovidError] = useState(false);
  const [everVaccinatedError, setEverVaccinatedError] = useState(false);
  const [lastVaccinatedError, setLastVaccinatedError] = useState(false);
  const [inputDateError, setInputDateError] = useState(false);

  const officeRef = useRef();
  const homeRef = useRef();
  const hybridRef = useRef();
  const yesCovidRef = useRef();
  const noCovidRef = useRef();
  const whenCovidRef = useRef();
  const yesVaccinatedRef = useRef();
  const noVaccinatedRef = useRef();
  const lastVaccinatedRef = useRef();

  const navigate = useNavigate();

  const handleOfficeClick = () => {
    setInputDateError(false);
    setPreferenceError(false);
  };
  const handleHomeClick = () => {
    setInputDateError(false);
    setPreferenceError(false);
  };
  const handleHybridClick = () => {
    setInputDateError(false);
    setPreferenceError(false);
  };
  const handleYesCovidClick = () => {
    setInputDateError(false);
    setHadCovidError(false);
    setHadCovid(true);
  };
  const handleNoCovidClick = () => {
    setInputDateError(false);
    setHadCovidError(false);
    setHadCovid(false);
  };
  const handleWhenCovidClick = () => {
    setWhenCovidError(false);
  };
  const handleYesVaccinatedClick = () => {
    setInputDateError(false);
    setEverVaccinatedError(false);
    setVaccinated(true);
  };
  const handleNoVaccinatedClick = () => {
    setInputDateError(false);
    setEverVaccinatedError(false);
    setVaccinated(false);
  };
  const handleLastVaccinatedClick = () => {
    setLastVaccinatedError(false);
  };

  const handleBackwardClick = () => {
    navigate('/technical-skillset');
  };

  const handleForwardClick = () => {
    if (
      (!officeRef.current.checked &&
        !homeRef.current.checked &&
        !hybridRef.current.checked) ||
      (!yesCovidRef.current.checked && !noCovidRef.current.checked) ||
      (yesCovidRef.current.checked && !whenCovidRef.current.value) ||
      (!yesVaccinatedRef.current.checked && !noVaccinatedRef.current.checked) ||
      (yesVaccinatedRef.current.checked && !lastVaccinatedRef.current.value)
    ) {
      setPreferenceError(true);
      setHadCovidError(true);
      setWhenCovidError(true);
      setEverVaccinatedError(true);
      setLastVaccinatedError(true);
      setInputDateError(true);

      return;
    }

    const modifiedCovidDataForSend = {
      work_preference: '',
      had_covid: false,
      had_covid_at: '',
      vaccinated: false,
      vaccinated_at: '',
    };

    let office,
      home,
      hybrid,
      covidYes,
      covidNo,
      covidWhen,
      vaccinatedYes,
      vaccinatedNo,
      vaccinatedLast;

    if (officeRef.current.checked) {
      console.log(officeRef.current.checked);
      modifiedCovidDataForSend.work_preference = officeRef.current.id;
      office = officeRef.current.checked;
    }

    if (homeRef.current.checked) {
      modifiedCovidDataForSend.work_preference = homeRef.current.id;
      home = homeRef.current.checked;
    }
    if (hybridRef.current.checked) {
      modifiedCovidDataForSend.work_preference = hybridRef.current.id;
      hybrid = hybridRef.current.checked;
    }
    if (yesCovidRef.current.checked) {
      modifiedCovidDataForSend.had_covid = true;
      covidYes = yesCovidRef.current.checked;
    }
    if (noCovidRef.current.checked) {
      modifiedCovidDataForSend.had_covid = false;
      covidNo = noCovidRef.current.checked;
    }
    if (yesCovidRef.current.checked && whenCovidRef.current.value) {
      modifiedCovidDataForSend.had_covid_at = whenCovidRef.current.value;
      covidWhen = whenCovidRef.current.value;
    }
    if (yesVaccinatedRef.current.checked) {
      modifiedCovidDataForSend.vaccinated = true;
      vaccinatedYes = yesVaccinatedRef.current.checked;
    }
    if (noVaccinatedRef.current.checked) {
      modifiedCovidDataForSend.vaccinated = false;
      vaccinatedNo = noVaccinatedRef.current.checked;
    }
    if (yesVaccinatedRef.current.checked && lastVaccinatedRef.current.value) {
      modifiedCovidDataForSend.vaccinated_at = lastVaccinatedRef.current.value;
      vaccinatedLast = lastVaccinatedRef.current.value;
    }

    dispatch({
      type: 'COVID_INPUT',
      payload: {
        work_preference: modifiedCovidDataForSend.work_preference,
        had_covid: modifiedCovidDataForSend.had_covid,
        had_covid_at: modifiedCovidDataForSend.had_covid_at,
        vaccinated: modifiedCovidDataForSend.vaccinated,
        vaccinated_at: modifiedCovidDataForSend.vaccinated_at,
      },
    });

    window.localStorage.setItem(
      'covid',
      JSON.stringify({
        office,
        home,
        hybrid,
        covidYes,
        covidNo,
        covidWhen,
        vaccinatedYes,
        vaccinatedNo,
        vaccinatedLast,
      })
    );

    navigate('/redberrian-insights');
  };

  return (
    <form className={styles.form} noValidate>
      <div>
        <div className={styles.inputs}>
          <h2>How would you prefer to work?</h2>
          <div className={styles['input-label-container']}>
            <input
              ref={officeRef}
              onClick={handleOfficeClick}
              type="radio"
              id="from_office"
              name="work"
              defaultChecked={stored ? stored?.office : ''}
            />
            <label htmlFor="from_office">From Sairme Office</label>
          </div>

          <div className={styles['input-label-container']}>
            <input
              ref={homeRef}
              onClick={handleHomeClick}
              type="radio"
              id="from_home"
              name="work"
              defaultChecked={stored ? stored?.home : ''}
            />
            <label htmlFor="from_home">From Home</label>
          </div>

          <div className={styles['input-label-container']}>
            <input
              ref={hybridRef}
              onClick={handleHybridClick}
              type="radio"
              id="hybrid"
              name="work"
              defaultChecked={stored ? stored?.hybrid : ''}
            />
            <label htmlFor="hybrid">Hybrid</label>
          </div>
          {preferenceError &&
            officeRef.current.checked === false &&
            homeRef.current.checked === false &&
            hybridRef.current.checked === false && (
              <p>* Please select at least one option</p>
            )}
        </div>

        <div className={styles.inputs}>
          <h2>Did you contract covid 19? :(</h2>

          <div className={styles['input-label-container']}>
            <input
              onClick={handleYesCovidClick}
              ref={yesCovidRef}
              type="radio"
              id="yes"
              name="covid"
              defaultChecked={stored ? stored?.covidYes : ''}
            />
            <label htmlFor="yes">Yes</label>
          </div>

          <div className={styles['input-label-container']}>
            <input
              onClick={handleNoCovidClick}
              ref={noCovidRef}
              type="radio"
              id="no"
              name="covid"
              defaultChecked={stored ? stored?.covidNo : ''}
            />
            <label htmlFor="no">No</label>
          </div>
          {hadCovidError &&
            yesCovidRef.current.checked === false &&
            noCovidRef.current.checked === false && (
              <p>* Please select at least one option</p>
            )}
        </div>

        {(hadCovid || stored?.covidYes) && (
          <div className={styles.inputs}>
            <h2>When?</h2>
            <input
              ref={whenCovidRef}
              onClick={handleWhenCovidClick}
              className={styles.test}
              type="date"
              defaultValue={stored ? stored?.covidWhen : ''}
              placeholder="Date"
              required
            />
            {inputDateError &&
              whenCovidError &&
              yesCovidRef.current.checked === true &&
              whenCovidRef.current?.value === '' && <p>* Please select date</p>}
          </div>
        )}

        <div className={styles.inputs}>
          <h2>Have you been vaccinated?</h2>

          <div className={styles['input-label-container']}>
            <input
              onClick={handleYesVaccinatedClick}
              ref={yesVaccinatedRef}
              type="radio"
              id="yess"
              name="vaccinated"
              defaultChecked={stored ? stored?.vaccinatedYes : ''}
            />
            <label htmlFor="yess">Yes</label>
          </div>

          <div className={styles['input-label-container']}>
            <input
              onClick={handleNoVaccinatedClick}
              ref={noVaccinatedRef}
              type="radio"
              id="noo"
              name="vaccinated"
              defaultChecked={stored ? stored?.vaccinatedNo : ''}
            />
            <label htmlFor="noo">No</label>
          </div>
          {everVaccinatedError &&
            yesVaccinatedRef.current.checked === false &&
            noVaccinatedRef.current.checked === false && (
              <p>* Please select at least one option</p>
            )}
        </div>

        {(vaccinated || stored?.vaccinatedYes) && (
          <div className={styles.inputs}>
            <h2>When did you get your last covid vaccine?</h2>
            <input
              ref={lastVaccinatedRef}
              onClick={handleLastVaccinatedClick}
              type="date"
              defaultValue={stored ? stored?.vaccinatedLast : ''}
              placeholder="Date"
              required
            />
            {inputDateError &&
              lastVaccinatedError &&
              yesVaccinatedRef.current.checked === true &&
              lastVaccinatedRef.current?.value === '' && (
                <p>* Please select date</p>
              )}
          </div>
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

export default CovidInput;
