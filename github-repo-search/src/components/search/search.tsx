import { Button } from '@mui/material';
import styles from '@styles/search.module.scss';

function Search(): JSX.Element {
  return (
    <div className={styles.searchContainer}>
      <input className={styles.searchInput} placeholder='Введите поисковый запрос'/>
      <Button variant="contained">Искать</Button>
    </div>
  );
}
export default Search;
