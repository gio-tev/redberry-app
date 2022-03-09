import { useState, useEffect } from 'react';
import Calendar from '../assets/Calendar.png';
import Up from '../assets/Up.png';
import Down from '../assets/Down.png';
import { v4 as uuidv4 } from 'uuid';
import styles from './SubmittedApplications.module.css';

const SubmittedApplications = () => {
  const [applications, setApplications] = useState([]);
  const [hidden, setHidden] = useState({});

  const [titles, setTitles] = useState([]);

  useEffect(() => {
    const getApplications = async () => {
      const response = await fetch(
        'https://bootcamp-2022.devtest.ge/api/applications?token=5f1b83de-5a26-4837-b7fd-6b8f70fec29b'
      );
      const data = await response.json();
      setApplications(data);
    };
    getApplications();
  }, []);

  useEffect(() => {
    const getSkills = async () => {
      const response = await fetch(
        'https://bootcamp-2022.devtest.ge/api/skills'
      );
      const data = await response.json();
      setTitles(data);
    };
    getSkills();
  }, []);

  const toggleContent = index => {
    setHidden({ ...hidden, [index]: !hidden[index] });
  };

  return (
    <div className={styles.container}>
      <h1>Submitted Applications</h1>

      {applications.map((app, index) => {
        return (
          <div key={uuidv4()} className={styles['application-container']}>
            <div className={styles['application-description']}>
              <div>{index + 1}</div>
              <div onClick={() => toggleContent(index)}>
                {!!hidden[index] ? (
                  <img className={styles.img} src={Up} alt="up" />
                ) : (
                  <img className={styles.img} src={Down} alt="down" />
                )}
              </div>
            </div>
            {!!hidden[index] && (
              <ul className={styles['application-content']}>
                <li className={styles['sub-input']}>
                  <h2>Personal Information</h2>
                  <div className={styles['form-container']}>
                    <p>First Name</p>
                    <p>{app.first_name}</p>
                  </div>
                  <div className={styles['form-container']}>
                    <p>Last Name</p>
                    <p>{app.last_name}</p>
                  </div>
                  <div className={styles['form-container']}>
                    <p>E Mail</p>
                    <p>{app.email}</p>
                  </div>

                  <div className={styles['form-container']}>
                    <p>Phone</p>
                    <p>{app.phone}</p>
                  </div>
                </li>

                <li className={styles['sub-input']}>
                  <h2>Skillset</h2>
                  {app.skills.map((skill, index) => {
                    return (
                      <div key={index} className={styles['form-container']}>
                        <p>{titles[index].title}</p>
                        <p>Years of Experience: {skill.experience}</p>
                      </div>
                    );
                  })}
                </li>

                <li className={styles['sub-input']}>
                  <h2>Covid Situation</h2>
                  <div className={styles['covid-sub-input']}>
                    <div className={styles['input-label-container']}>
                      <h3>how would you prefer to work?</h3>
                      <input
                        type="radio"
                        id="from_office"
                        name="work"
                        defaultChecked={
                          app.work_preference === 'from_office' ? true : false
                        }
                      />
                      <label htmlFor="from_office">From Sairme Office</label>
                    </div>

                    <div className={styles['input-label-container']}>
                      <input
                        type="radio"
                        id="from_home"
                        name="work"
                        defaultChecked={
                          app.work_preference === 'from_home' ? true : false
                        }
                      />
                      <label htmlFor="from_home">From Home</label>
                    </div>

                    <div className={styles['input-label-container']}>
                      <input
                        type="radio"
                        id="hybrid"
                        name="work"
                        defaultChecked={
                          app.work_preference === 'hybrid' ? true : false
                        }
                      />
                      <label htmlFor="hybrid">Hybrid</label>
                    </div>
                  </div>
                  <div className={styles['covid-sub-input']}>
                    <h3>Did you have covid 19?</h3>
                    <div className={styles['input-label-container']}>
                      <input
                        type="radio"
                        id="yes"
                        name="covid"
                        defaultChecked={app.had_covid && true}
                      />
                      <label htmlFor="yes">Yes</label>
                    </div>

                    <div className={styles['input-label-container']}>
                      <input
                        type="radio"
                        id="no"
                        name="covid"
                        defaultChecked={!app.had_covid && true}
                      />
                      <label htmlFor="no">No</label>
                    </div>
                  </div>

                  <div className={styles['covid-sub-input']}>
                    <h3>When did you have covid 19?</h3>
                    <div className={styles['date-image-contrainer']}>
                      <div>{app.had_covid_at}</div>
                      <div>
                        <img src={Calendar} alt="image" />
                      </div>
                    </div>
                  </div>
                  <div className={styles['covid-sub-input']}>
                    <h3>Have you been vaccinated?</h3>

                    <div className={styles['input-label-container']}>
                      <input
                        type="radio"
                        id="yess"
                        name="vaccinated"
                        defaultChecked={app.vaccinated && true}
                      />
                      <label htmlFor="yess">Yes</label>
                    </div>

                    <div className={styles['input-label-container']}>
                      <input
                        type="radio"
                        id="noo"
                        name="vaccinated"
                        defaultChecked={!app.vaccinated && true}
                      />
                      <label htmlFor="noo">No</label>
                    </div>
                  </div>
                  <div>
                    <h3>When did you get covid vaccine?</h3>
                    <div className={styles['date-image-contrainer']}>
                      <div>{app.vaccinated_at}</div>
                      <div>
                        <img src={Calendar} alt="calendar image" />
                      </div>
                    </div>
                  </div>
                </li>

                <li className={styles['sub-input']}>
                  <h2>Insigts</h2>
                  <div className={styles['covid-sub-input-left']}>
                    <h3>
                      Would you attend Devtalks and maybe also organize your
                      own?
                    </h3>
                    <div className={styles['input-label-container']}>
                      <input
                        type="radio"
                        id="yes"
                        name="Devtalks"
                        defaultChecked={app.will_organize_devtalk && true}
                      />
                      <label htmlFor="yes">Yes</label>
                    </div>

                    <div className={styles['input-label-container']}>
                      <input
                        type="radio"
                        id="no"
                        name="Devtalks"
                        defaultChecked={!app.will_organize_devtalk && true}
                      />
                      <label htmlFor="no">No</label>
                    </div>
                  </div>

                  <div className={styles['covid-sub-input-left']}>
                    <h3>What would you speak about at Devtalk?</h3>
                    <textarea placeholder={app.devtalk_topic} id="1" disabled />
                  </div>
                  <div className={styles['covid-sub-input-left']}>
                    <h3>Tell us something special</h3>
                    <textarea
                      placeholder={app.something_special}
                      id="2"
                      disabled
                    />
                  </div>
                </li>
              </ul>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default SubmittedApplications;
