import { NavLink } from 'react-router-dom';
import Button from './Button';
import styles from './Pagination.module.css';

const Pagination = props => {
  return (
    <div className={styles.pagination}>
      <Button onClick={props.onBack} className={styles['btn-pagination']}>
        &#60;
      </Button>

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

      <Button onClick={props.onNext} className={styles['btn-pagination']}>
        &#62;
      </Button>
    </div>
  );
};

export default Pagination;
