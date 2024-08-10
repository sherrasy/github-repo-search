import styles from '@styles/details.module.scss';
import DetailsInfo from './details-info';
import { AppMessages } from '@utils/constant';
import { useAppSelector } from '@/utils/hooks';
import { getCurrentRepository } from '@/store/repository-data/selectors';

function Details(): JSX.Element {
  const repository = useAppSelector(getCurrentRepository);
  return (
    <div className={styles.detailsContainer}>
      {!repository ? (
        <div className={styles.detailsInitialBlock}>
          <p>{AppMessages.DetailsInitial}</p>
        </div>
      ) : (
        <DetailsInfo repository={repository} />
      )}
    </div>
  );
}
export default Details;
