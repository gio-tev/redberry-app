import { NavLink } from 'react-router-dom';
import styles from './Pagination.module.css';

const Pagination = props => {
  return (
    <div className={styles.pagination}>
      <button
        type="button"
        onClick={props.onBack}
        className={styles['btn-pagination']}
      >
        &#60;
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
        &#62;
      </button>
    </div>
  );
};

export default Pagination;
