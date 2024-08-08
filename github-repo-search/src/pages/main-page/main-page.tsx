import Details from "@/components/details/details";
import Result from "@components/result/result";
import Search from "@components/search/search";
import styles from '@styles/main-page.module.scss';

function MainPage(): JSX.Element {
    const isEmpty = false;
  return (
    <>
        <Search/>
       { isEmpty ? 
        <h1>Добро пожаловать</h1> 
        :<div className={styles.mainPageInfo}>
        <Result/>
        <Details/>
        </div>}
        <div className={styles.footer}/>
    </>
  );
}
export default MainPage;
