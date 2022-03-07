import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Pagination from './Pagination';
import styles from './CovidInput.module.css';

const CovidInput = () => {
  // const [workPreference, setWorkPreference] = useState('');
  const [hadCovid, setHadCovid] = useState(false);
  // const [whenContracted, setWhenContracted] = useState('');
  const [vaccinated, setVaccinated] = useState(false);
  // const [whenVaccinatedLast, setWhenVaccinatedLast] = useState('');

  const officeRef = useRef();
  const homeRef = useRef();
  const hybridRef = useRef();
  const yesCovid = useRef();
  const noCovid = useRef();
  const whenCovid = useRef();
  const yesVaccinated = useRef();
  const noVaccinated = useRef();
  const lastVaccinated = useRef();

  const navigate = useNavigate();

  const handleYesCovidClick = e => {
    if (e.target.checked) {
      setHadCovid(true);
    }
  };
  const handleYesVaccinatedClick = e => {
    if (e.target.checked) {
      setVaccinated(true);
    }
  };

  const handleBackwardClick = () => {
    navigate('/technical-skillset');
  };

  const handleForwardClick = () => {
    const modifiedCovidDataForSend = {
      work_preference: '',
      had_covid: false,
      had_covid_at: '',
      vaccinated: false,
      vaccinated_at: '',
    };
    if (officeRef.current.checked)
      modifiedCovidDataForSend.work_preference = officeRef.current.id;
    if (homeRef.current.checked)
      modifiedCovidDataForSend.work_preference = homeRef.current.id;
    if (hybridRef.current.checked)
      modifiedCovidDataForSend.work_preference = hybridRef.current.id;
    if (yesCovid.current.checked) modifiedCovidDataForSend.had_covid = true;
    if (whenCovid.current.value)
      modifiedCovidDataForSend.had_covid_at = whenCovid.current.value;
    if (yesVaccinated.current.checked)
      modifiedCovidDataForSend.vaccinated = true;
    if (lastVaccinated.current.value)
      modifiedCovidDataForSend.vaccinated_at = lastVaccinated.current.value;

    // Send data to global state////////////////////////////////////////////////
    navigate('/redberrian-insights');
  };

  return (
    <form className={styles.form} noValidate>
      <div className={styles.inputs}>
        <h2>How would you prefer to work?</h2>
        <div className={styles['input-label-container']}>
          <input ref={officeRef} type="radio" id="from_office" name="work" />
          <label htmlFor="office">From Sairme Office</label>
        </div>

        <div className={styles['input-label-container']}>
          <input ref={homeRef} type="radio" id="from_home" name="work" />
          <label htmlFor="home">From Home</label>
        </div>

        <div className={styles['input-label-container']}>
          <input ref={hybridRef} type="radio" id="hybrid" name="work" />
          <label htmlFor="hybrid">Hybrid</label>
        </div>
      </div>

      <div className={styles.inputs}>
        <h2>Did you contract covid 19? :(</h2>

        <div className={styles['input-label-container']}>
          <input
            onClick={handleYesCovidClick}
            ref={yesCovid}
            type="radio"
            id="yes"
            name="covid"
          />
          <label htmlFor="yes">Yes</label>
        </div>

        <div className={styles['input-label-container']}>
          <input ref={noCovid} type="radio" id="no" name="covid" />
          <label htmlFor="no">No</label>
        </div>
      </div>

      {hadCovid && (
        <div className={styles.inputs}>
          <h2>When?</h2>
          <input ref={whenCovid} className={styles.test} type="date" />
        </div>
      )}

      <div className={styles.inputs}>
        <h2>Have you been vaccinated?</h2>

        <div className={styles['input-label-container']}>
          <input
            onClick={handleYesVaccinatedClick}
            ref={yesVaccinated}
            type="radio"
            id="yess"
            name="vaccinated"
          />
          <label htmlFor="yes2">Yes</label>
        </div>

        <div className={styles['input-label-container']}>
          <input ref={noVaccinated} type="radio" id="noo" name="vaccinated" />
          <label htmlFor="no2">No</label>
        </div>
      </div>

      {vaccinated && (
        <div className={styles.inputs}>
          <h2>When did you get your last covid vaccine?</h2>
          <input ref={lastVaccinated} type="date" />
        </div>
      )}

      <Pagination
        className={styles['custom-pagination']}
        onBack={handleBackwardClick}
        onNext={handleForwardClick}
      />
    </form>
  );
};

export default CovidInput;
