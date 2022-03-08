import { useEffect, useState, useRef, useContext } from 'react';
import { AppContext } from '../../store/AppContext';
import { useNavigate } from 'react-router-dom';
import Pagination from './Pagination';
import styles from './TechnicalInput.module.css';
import Remove from '../../assets/Remove.png';

const TechnicalInput = () => {
  const { dispatch } = useContext(AppContext);

  const [skills, setSkills] = useState([]);
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [inputRequired, setInputRequired] = useState(false);
  const [sameSkills, setSameSkills] = useState(false);
  const [noSkill, setNoSkill] = useState(false);

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
      } else setSameSkills(false);
    });

    if (sameSkills) return;

    if (!inputRef.current.value) {
      return setInputRequired(true);
    } else setInputRequired(false);

    setSelectedSkills(prevState => {
      if (prevState) {
        return [
          ...prevState,
          {
            title: selectedRef.current.value,
            experience: inputRef.current.value,
          },
        ];
      } else {
        return [
          {
            title: selectedRef.current.value,
            experience: inputRef.current.value,
          },
        ];
      }
    });
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

    navigate('/covid');
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <select ref={selectedRef}>
        {skills.map(skill => {
          return <option key={skill.id}>{skill.title}</option>;
        })}
      </select>

      <input
        // className={styles.input}
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
