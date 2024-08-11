import Details from '@/components/details/details';
import Result from '@components/result/result';
import Search from '@components/search/search';
import { getHasError, getIsLoading, getRepositories} from '@store/repository-data/selectors';
import styles from '@styles/main-page.module.scss';
import { AppMessages } from '@utils/constant';
import { useAppSelector } from '@utils/hooks';

function MainPage(): JSX.Element {
  const repositories = useAppSelector(getRepositories);
  const isLoading = useAppSelector(getIsLoading);
  const hasError = useAppSelector(getHasError);
  const currentText = !isLoading ? AppMessages.Greeting : AppMessages.Loading;
  return (
    <div className={styles.mainPageContainer}>
      <Search />
      {!repositories ? (
        <div className={styles.mainPageText}>
          <h1 className={styles.greetingText}>
            {!hasError ? currentText : AppMessages.Error}
          </h1>
        </div>
      ) : (
        <div className={styles.mainPageInfo}>
          <Result repositories={repositories} />
          <Details />
        </div>
      )}
      <div className={styles.footer} />
    </div>
  );
}
export default MainPage;
