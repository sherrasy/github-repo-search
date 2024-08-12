import { DetailsInfoProps } from '@frontend-types/props.type';
import { Chip, Rating } from '@mui/material';
import styles from '@styles/details.module.scss';

function DetailsInfo({ repository }: DetailsInfoProps): JSX.Element {
  const { name, language, rating, topics, description, license } = repository;
  // Форматирует количество звезд для отображения с тысячным разделителем   
  const formattedRating = new Intl.NumberFormat("ru-RU").format(rating);
  return (
    <div className={styles.detailsInfo}>
      <span className={styles.detailsTitle}>{name}</span>
      <div>
        <div className={styles.detailsMainBlock}>
          <div >
            <Chip className={styles.detailsLanguageChip} label={language ? language : 'None'} color='primary' />
          </div>
          <div className={styles.detailsRaiting}>
            <Rating max={1} value={1} readOnly />
            <span>{formattedRating}</span>
          </div>
        </div>

        {topics.length > 0 && <div className={styles.detailsTopics} >{topics.map((item) => <Chip label={item} key={item} />)}</div>}
        <p>{description}</p>
        <p className={styles.detailsLicence}>{`${license} licence`}</p>
      </div>
    </div>
  );
}
export default DetailsInfo;
