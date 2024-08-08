import styles from '@styles/details.module.scss';
import DetailsInfo from './details-info';

function Details(): JSX.Element {
  const isEmpty = false;
    return (
      <div className={styles.detailsContainer}>
      {isEmpty ?  <p>Выберите репозиторий</p>
      :<DetailsInfo/>
            }
      </div>
    );
  }
  export default Details;