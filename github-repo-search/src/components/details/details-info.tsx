import { DetailsInfoProps } from '@frontend-types/props.type';
import { Chip, Rating } from '@mui/material';
import styles from '@styles/details.module.scss';

function DetailsInfo({ repository }: DetailsInfoProps): JSX.Element {
  const { name, language, rating, topics, description, license } = repository;
  return (
    <div className={styles.detailsInfo}>
      <span className={styles.detailsTitle}>{name}</span>
      <div>
        <div className={styles.detailsMainBlock}>
          <div>
            <Chip label={language ? language : 'None'} color='primary' />
          </div>
          <div className={styles.detailsRaiting}>
            <Rating max={1} value={1} readOnly />
            <span>{rating}</span>
          </div>
        </div>

        {topics.length>0 &&<div className={styles.detailsTopics} >{topics.map((item) => <Chip label={item} key={item} />)}</div>}
        <p>{description}</p>
        <p>{license} licence</p>
      </div>
    </div>
  );
}
export default DetailsInfo;
