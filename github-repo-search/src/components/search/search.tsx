import { fetchRepositories } from '@/store/repository-data/api-actions';
import { Button } from '@mui/material';
import styles from '@styles/search.module.scss';
import { useAppDispatch } from '@utils/hooks';
import { useRef } from 'react';

function Search(): JSX.Element {
  const dispatch = useAppDispatch();
  const inputRef = useRef<HTMLInputElement>(null);
  // Убирает выделение inputа, если до этого была ошибка
  const removeErrorOutline = () => inputRef.current?.classList.remove(styles.searchInputError);

  // Добавляет выделение inputа, если в нем нет значения для поиска, иначе отправляет запрос на получение списка репозиториев
  const handleSearchClick = () => {
    if (!inputRef.current?.value.trim()) {
      inputRef.current?.classList.add(styles.searchInputError)
      return;
    }
    dispatch(fetchRepositories(inputRef.current?.value))
  }
  return (
    <div className={styles.searchContainer}>
      <input className={styles.searchInput} placeholder='Введите поисковый запрос' ref={inputRef} onInput={removeErrorOutline} />      <Button variant="contained" onClick={handleSearchClick} >Искать</Button>
    </div>
  );
}
export default Search;
