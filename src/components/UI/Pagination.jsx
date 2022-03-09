import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Pagination.module.css';
import Previous from '../../assets/Previous.png';
import Next from '../../assets/Next.png';

const Pagination = props => {
  const [activeTwo, setActiveTwo] = useState(false);
  const [activeThree, setActiveThree] = useState(false);
  const [activeFour, setActiveFour] = useState(false);

  useEffect(() => {
    if (window.location.href.endsWith('technical-skillset')) setActiveTwo(true);
    if (window.location.href.endsWith('covid')) {
      setActiveTwo(true);
      setActiveThree(true);
    }
    if (window.location.href.endsWith('redberrian-insights')) {
      setActiveTwo(true);
      setActiveThree(true);
      setActiveFour(true);
    }
  }, []);

  const navigate = useNavigate();

  const handleClick = e => {
    if (e.target.id === '1') {
      navigate('/personal-information');
    }

    if (e.target.id === '2' && activeTwo) {
      navigate('/technical-skillset');
    }

    if (e.target.id === '3' && activeThree) {
      navigate('/covid');
    }

    if (e.target.id === '4') {
      navigate('/redberrian-insights' && activeFour);
    }
  };

  return (
    <nav className={`${styles.pagination} ${props.className}`}>
      <button
        type="button"
        onClick={props.onBack}
        className={styles['btn-pagination']}
      >
        <img src={Previous} alt="Previos" />
      </button>

      <span onClick={handleClick} id="1" className={styles.active}></span>
      <span
        onClick={handleClick}
        id="2"
        className={activeTwo ? styles.active : styles['pagination-link']}
      ></span>
      <span
        onClick={handleClick}
        id="3"
        className={activeThree ? styles.active : styles['pagination-link']}
      ></span>
      <span
        onClick={handleClick}
        id="4"
        className={activeFour ? styles.active : styles['pagination-link']}
      ></span>
      <span id="5" className={styles['pagination-link']}></span>

      <button
        type="button"
        onClick={props.onNext}
        className={styles['btn-pagination']}
      >
        <img src={Next} alt="Next" />
      </button>
    </nav>
  );
};

export default Pagination;
