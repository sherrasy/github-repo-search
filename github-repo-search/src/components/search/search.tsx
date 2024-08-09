import { fetchRepositories } from '@/store/repository-data/api-actions';
import { useAppDispatch } from '@utils/hooks';
import { Button } from '@mui/material';
import styles from '@styles/search.module.scss';
import { useRef } from 'react';

function Search(): JSX.Element {
  const dispatch = useAppDispatch();
  const inputRef = useRef<HTMLInputElement>(null);
  const handleSearchClick = ()=>{
    console.log(inputRef.current?.value)
    dispatch(fetchRepositories())
  }
  return (
    <div className={styles.searchContainer}>
      <input className={styles.searchInput} placeholder='Введите поисковый запрос' ref={inputRef}/>
      <Button variant="contained" onClick={handleSearchClick}>Искать</Button>
    </div>
  );
}
export default Search;
