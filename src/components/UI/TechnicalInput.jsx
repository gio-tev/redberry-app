import { useEffect, useState, useRef, useContext } from 'react';
import { AppContext } from '../../store/AppContext';
import { useNavigate } from 'react-router-dom';
import Pagination from './Pagination';
import styles from './TechnicalInput.module.css';
import Remove from '../../assets/Remove.png';

const TechnicalInput = () => {
  const stored = JSON.parse(window.localStorage.getItem('selected'));

  const { dispatch } = useContext(AppContext);

  const [skills, setSkills] = useState([]);
  const [selectedSkills, setSelectedSkills] = useState(stored ? stored : []);
  const [inputRequired, setInputRequired] = useState(false);
  const [sameSkills, setSameSkills] = useState(false);
  const [noSkill, setNoSkill] = useState(false);

  const [placeholder, setPlaceHolder] = useState('default');

  const selectedRef = useRef();
  const inputRef = useRef();

  const navigate = useNavigate();

  useEffect(() => {
    const getSkills = async () => {
      const response = await fetch(
        'https://bootcamp-2022.devtest.ge/api/skills'
      );
      const data = await response.json();
      setSkills(data);
    };
    getSkills();
  }, []);

  const handleSubmit = e => {
    e.preventDefault();

    let sameSkills = false;

    selectedSkills.forEach(skill => {
      if (skill.title === selectedRef.current.value) {
        sameSkills = true;
        setSameSkills(true);
      }
    });
    // else setSameSkills(false);
    if (sameSkills) return;

    if (!inputRef.current.value) {
      return setInputRequired(true);
    } else setInputRequired(false);

    setSelectedSkills(prevState => {
      return [
        ...prevState,
        {
          title: selectedRef.current.value,
          experience: inputRef.current.value,
        },
      ];
    });
  };

  const handleChange = e => {
    setPlaceHolder(e.target.value);
  };

  const handleRemoveSkill = e => {
    if (e.currentTarget.title) {
      const updatedSelectedSkills = selectedSkills.filter(
        skill => skill.title !== e.currentTarget.title
      );
      setSelectedSkills(updatedSelectedSkills);
    }
  };

  const handleBackwardClick = () => {
    navigate('/personal-information');
  };

  const handleForwardClick = () => {
    const modifiedDataForSend = [];

    for (let i = 0; i < selectedSkills.length; i++) {
      for (let j = 0; j < skills.length; j++) {
        if (selectedSkills[i].title === skills[j].title) {
          modifiedDataForSend.push({
            id: skills[j].id,
            experience: +selectedSkills[i].experience,
          });
        }
      }
    }

    if (modifiedDataForSend.length === 0) {
      return setNoSkill(true);
    } else setNoSkill(false);

    dispatch({
      type: 'TECHNICAL_INPUT',
      payload: {
        skills: modifiedDataForSend,
      },
    });

    window.localStorage.setItem('selected', JSON.stringify(selectedSkills));

    navigate('/covid');
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <select
        ref={selectedRef}
        onChange={handleChange}
        defaultValue={placeholder}
      >
        <option value="default" disabled hidden>
          Skills
        </option>

        {skills.map(skill => {
          return (
            <option key={skill.id} value={skill.title}>
              {skill.title}
            </option>
          );
        })}
      </select>

      <input
        ref={inputRef}
        type="number"
        placeholder="Experience Duration in Years"
      />
      {inputRequired && <p>Please enter your experience</p>}
      {sameSkills && <p>Selecting same skills is not allowed</p>}
      {noSkill && <p>Please select at least one skill</p>}

      <button className={styles['technical-button']} type="submit">
        Add Programming Language
      </button>

      <div className={styles['selected-skills-container']}>
        {selectedSkills.map((skill, index) => {
          return (
            <div key={index} className={styles['selected-skill-container']}>
              <div>{skill.title}</div>
              <div className={styles.years}>
                Years of Experience: {skill.experince}
              </div>

              <button
                onClick={handleRemoveSkill}
                title={skill.title}
                type="button"
              >
                <img onClick={handleRemoveSkill} src={Remove} alt="remove" />
              </button>
            </div>
          );
        })}
      </div>

      <Pagination
        className={styles['custom-pagination']}
        onBack={handleBackwardClick}
        onNext={handleForwardClick}
      />
    </form>
  );
};

export default TechnicalInput;
