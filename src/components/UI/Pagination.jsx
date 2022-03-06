import { NavLink } from 'react-router-dom';
import styles from './Pagination.module.css';
import Previous from '../../assets/Previous.png';
import Next from '../../assets/Next.png';

const Pagination = props => {
  return (
    <nav className={`${styles.pagination} ${props.className}`}>
      <button
        type="button"
        onClick={props.onBack}
        className={styles['btn-pagination']}
      >
        <img src={Previous} alt="Previos" />
      </button>

      <NavLink
        to="/personal-information"
        className={navData =>
          navData.isActive
            ? `${styles['pagination-link']} ${styles.active}`
            : `${styles['pagination-link']}`
        }
      ></NavLink>
      <NavLink
        to="/technical-skillset"
        className={navData =>
          navData.isActive
            ? `${styles['pagination-link']} ${styles.active}`
            : `${styles['pagination-link']}`
        }
      ></NavLink>
      <NavLink
        to="/covid"
        className={navData =>
          navData.isActive
            ? `${styles['pagination-link']} ${styles.active}`
            : `${styles['pagination-link']}`
        }
      ></NavLink>
      <NavLink
        to="/redberrian-insights"
        className={navData =>
          navData.isActive
            ? `${styles['pagination-link']} ${styles.active}`
            : `${styles['pagination-link']}`
        }
      ></NavLink>
      <NavLink
        to="/submit"
        className={navData =>
          navData.isActive
            ? `${styles['pagination-link']} ${styles.active}`
            : `${styles['pagination-link']}`
        }
      ></NavLink>

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
