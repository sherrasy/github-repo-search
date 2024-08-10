import { fetchRepositories } from '@/store/repository-data/api-actions';
import { Button } from '@mui/material';
import styles from '@styles/search.module.scss';
import { useAppDispatch } from '@utils/hooks';
import { useRef } from 'react';

function Search(): JSX.Element {
  const dispatch = useAppDispatch();
  const inputRef = useRef<HTMLInputElement>(null);
  const handleSearchClick = () => {
    if(!inputRef.current?.value){
      inputRef.current?.classList.add(styles.searchInputError)
      return;
    }
    inputRef.current?.classList.remove(styles.searchInputError)
    dispatch(fetchRepositories({searchString:inputRef.current?.value}))
  }
  return (
    <div className={styles.searchContainer}>
      <input className={styles.searchInput} placeholder='Введите поисковый запрос' ref={inputRef} />
      <Button variant="contained" onClick={handleSearchClick} >Искать</Button>
    </div>
  );
}
export default Search;
