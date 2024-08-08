import { Chip, Rating } from '@mui/material';
import styles from '@styles/details.module.scss';

function DetailsInfo(): JSX.Element {
    const languages = Array.from({length:5},(_,i)=>`lang-${i}`) 
    return (
      <div className={styles.detailsInfo}>
      <span className={styles.detailsTitle}>Название репозитория</span>
      <div>
        <div className={styles.detailsMainBlock}>
            <p><Chip label="LangChosen" color='primary'/></p>
            <p><Rating max={1} value={1} readOnly/> 9 800 000</p>
        </div>

        <p>{languages.map((item)=> <Chip label = {item}/>)}</p>
        <p>Description?</p>
        <p>licence</p>
      </div>
      </div>

    );
  }
  export default DetailsInfo;