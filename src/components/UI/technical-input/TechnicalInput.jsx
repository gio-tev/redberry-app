import { useEffect, useState, useRef, useContext } from 'react';
import { AppContext } from '../../../store/AppContext';
import { useNavigate } from 'react-router-dom';
import Pagination from '../pagination/Pagination';
import Remove from '../../../assets/Remove.png';
import styles from './TechnicalInput.module.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TechnicalInput = () => {
  const stored = JSON.parse(window.localStorage.getItem('selected'));

  const { dispatch } = useContext(AppContext);

  const [skills, setSkills] = useState([]);
  const [selectedSkills, setSelectedSkills] = useState(stored ? stored : []);
  const [inputRequired, setInputRequired] = useState(false);
  const [noSkill, setNoSkill] = useState(false);
  const [sameSkills, setSameSkills] = useState(false);
  const [nameChosen, setNameChosen] = useState(true);

  const selectedRef = useRef();
  const inputRef = useRef();

  const placeholder = 'default';

  const navigate = useNavigate();

  useEffect(() => {
    const getSkills = async () => {
      try {
        const response = await fetch(
          'https://bootcamp-2022.devtest.ge/api/skills'
        );
        if (!response.ok)
          throw new Error('Something went wrong, please try again.');

        const data = await response.json();
        setSkills(data);
      } catch (error) {
        toast.error(error.message, {
          toastId: 1,
          autoClose: 3000,
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
    };

    getSkills();
  }, []);

  const handleSelectClick = e => {
    setNameChosen(true);
    setSameSkills(false);
  };
  const handleExperinceClick = e => {
    setNoSkill(false);
    setInputRequired(false);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (
      selectedRef.current.value === 'default' &&
      selectedSkills.length === 0 &&
      inputRef.current.value === ''
    ) {
      setNameChosen(false);
      setInputRequired(true);
      return;
    }
    if (
      selectedRef.current.value === 'default' &&
      selectedSkills.length === 0 &&
      inputRef.current.value !== ''
    ) {
      setNameChosen(false);
      setInputRequired(false);
      return;
    }
    if (
      selectedRef.current.value === 'default' &&
      selectedSkills.length !== 0
    ) {
      return setNameChosen(false);
    }

    let sameSkills = false;

    selectedSkills.forEach(skill => {
      if (
        skill.title === selectedRef.current.value &&
        inputRef.current.value === ''
      ) {
        setInputRequired(false);
      }
      if (skill.title === selectedRef.current.value) {
        sameSkills = true;
        setSameSkills(true);
      }
    });

    if (sameSkills) return;

    if (!inputRef.current.value) {
      return setInputRequired(true);
    }

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
    }

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
      <ToastContainer style={{ width: '500px' }} />
      <select
        ref={selectedRef}
        onClick={handleSelectClick}
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
      {!nameChosen && <p>* Please choose name</p>}

      <input
        ref={inputRef}
        onClick={handleExperinceClick}
        type="number"
        placeholder="Experience Duration in Years"
      />
      {inputRequired && <p>* Please enter your experience</p>}
      {sameSkills && <p>* Selecting same skills is not allowed</p>}
      {noSkill && <p>* Please select at least one skill</p>}

      <button className={styles['technical-button']} type="submit">
        Add Programming Language
      </button>

      <div className={styles['selected-skills-container']}>
        {selectedSkills.map((skill, index) => {
          return (
            <div key={index} className={styles['selected-skill-container']}>
              <div>{skill.title}</div>
              <div className={styles.years}>
                Years of Experience: {skill.experience}
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
        <Pagination
          className={styles['custom-pagination']}
          onBack={handleBackwardClick}
          onNext={handleForwardClick}
        />
      </div>
    </form>
  );
};

export default TechnicalInput;
