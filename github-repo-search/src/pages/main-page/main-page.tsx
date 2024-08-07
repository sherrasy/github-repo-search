import Details from "@/components/details/details";
import Result from "@components/result/result";
import Search from "@components/search/search";

function MainPage(): JSX.Element {
    const isEmpty = false;
  return (
    <>
        <Search/>
       { isEmpty ? 
        <h1>Добро пожаловать</h1> 
        :<>
        <Result/>
        <Details/>
        </>}
    </>
  );
}
export default MainPage;
