import { useState, useRef, useContext } from 'react';
import { AppContext } from '../../store/AppContext';
import { useNavigate } from 'react-router-dom';
import Pagination from './Pagination';
import styles from './CovidInput.module.css';

const CovidInput = () => {
  const stored = JSON.parse(window.localStorage.getItem('covid'));

  const { dispatch } = useContext(AppContext);

  const [hadCovid, setHadCovid] = useState(false);
  const [vaccinated, setVaccinated] = useState(false);

  const [noPreference, setNoPreference] = useState(false);
  const [covidNotChecked, setCovidNotChecked] = useState(false);
  const [whenCovidNotChecked, setWhenCovidNotChecked] = useState(false);
  const [vaccinatedNotChecked, setVaccinatedNotChecked] = useState(false);
  const [lastVaccinatedNotChecked, setLastVaccinatedNotChecked] =
    useState(false);

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
    if (
      !officeRef.current.checked &&
      !homeRef.current.checked &&
      !hybridRef.current.checked
    ) {
      return setNoPreference(true);
    }

    if (!yesCovid.current.checked && !noCovid.current.checked) {
      return setCovidNotChecked(true);
    }

    if (yesCovid.current.checked && !whenCovid.current.value) {
      return setWhenCovidNotChecked(true);
    }

    if (!yesVaccinated.current.checked && !noVaccinated.current.checked) {
      return setVaccinatedNotChecked(true);
    }

    if (yesVaccinated.current.checked && !lastVaccinated.current.value) {
      return setLastVaccinatedNotChecked(true);
    }

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
    if (noCovid.current.checked) modifiedCovidDataForSend.had_covid = false;
    if (yesCovid.current.checked && whenCovid.current.value)
      modifiedCovidDataForSend.had_covid_at = whenCovid.current.value;

    if (yesVaccinated.current.checked)
      modifiedCovidDataForSend.vaccinated = true;
    if (noVaccinated.current.checked)
      modifiedCovidDataForSend.vaccinated = false;
    if (yesVaccinated.current.checked && lastVaccinated.current.value)
      modifiedCovidDataForSend.vaccinated_at = lastVaccinated.current.value;

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

    let office,
      home,
      hybrid,
      covidYes,
      covidNo,
      covidWhen,
      vaccinatedYes,
      vaccinatedNo,
      vaccinatedLast;

    if (officeRef.current.checked) office = officeRef.current.checked;
    if (homeRef.current.checked) home = homeRef.current.checked;
    if (hybridRef.current.checked) hybrid = hybridRef.current.checked;
    if (yesCovid.current.checked) covidYes = yesCovid.current.checked;
    if (noCovid.current.checked) covidNo = noCovid.current.checked;
    if (yesCovid.current.checked && whenCovid.current.value)
      covidWhen = whenCovid.current.value;
    if (yesVaccinated.current.checked)
      vaccinatedYes = yesVaccinated.current.checked;
    if (noVaccinated.current.checked)
      vaccinatedNo = noVaccinated.current.checked;
    if (yesVaccinated.current.checked && lastVaccinated.current.value)
      vaccinatedLast = lastVaccinated.current.value;

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
      <div className={styles.inputs}>
        <h2>How would you prefer to work?</h2>
        <div className={styles['input-label-container']}>
          <input
            ref={officeRef}
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
            type="radio"
            id="hybrid"
            name="work"
            defaultChecked={stored ? stored?.hybrid : ''}
          />
          <label htmlFor="hybrid">Hybrid</label>
        </div>
        {noPreference && <p>Please select at least one option</p>}
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
            defaultChecked={stored ? stored?.covidYes : ''}
          />
          <label htmlFor="yes">Yes</label>
        </div>

        <div className={styles['input-label-container']}>
          <input
            ref={noCovid}
            type="radio"
            id="no"
            name="covid"
            defaultChecked={stored ? stored?.covidNo : ''}
          />
          <label htmlFor="no">No</label>
        </div>
        {covidNotChecked && <p>Please select at least one option</p>}
      </div>

      {(hadCovid || stored?.covidYes) && (
        <div className={styles.inputs}>
          <h2>When?</h2>
          <input
            ref={whenCovid}
            className={styles.test}
            type="date"
            defaultValue={stored ? stored?.covidWhen : ''}
          />
          {whenCovidNotChecked && <p>Please select date</p>}
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
            defaultChecked={stored ? stored?.vaccinatedYes : ''}
          />
          <label htmlFor="yess">Yes</label>
        </div>

        <div className={styles['input-label-container']}>
          <input
            ref={noVaccinated}
            type="radio"
            id="noo"
            name="vaccinated"
            defaultChecked={stored ? stored?.vaccinatedNo : ''}
          />
          <label htmlFor="noo">No</label>
        </div>
        {vaccinatedNotChecked && <p>Please select at least one option</p>}
      </div>

      {(vaccinated || stored?.vaccinatedYes) && (
        <div className={styles.inputs}>
          <h2>When did you get your last covid vaccine?</h2>
          <input
            ref={lastVaccinated}
            type="date"
            defaultValue={stored ? stored?.vaccinatedLast : ''}
          />
          {lastVaccinatedNotChecked && <p>Please select date</p>}
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
