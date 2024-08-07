import { ResultFieldName, sortingParams } from "@utils/constant";
import { DataGrid, GridColDef, GridRowsProp } from "@mui/x-data-grid";
import styles from '@styles/result.module.scss';

function Result(): JSX.Element {
  const rows: GridRowsProp = Object.entries(ResultFieldName).map(([key,value], i)=>({
    id:i,
    [key]:value,
  }));
  
  const columns: GridColDef[] = Object.entries(ResultFieldName).map(([key,value])=>({
    field:key,
    headerName:value,
    headerClassName:styles.resultColumn,
    cellClassName:styles.resultCell,
    disableColumnMenu:true,
    resizable:false,
    sortable: value !== ResultFieldName.Name,
    sortingOrder: sortingParams,
    }));

  return (
      <div className={styles.result}>
        <h1 className={styles.resultTitle}>Результаты поиска</h1>
        <DataGrid rows={rows} columns={columns} className={styles.resultTable} />
      </div>
    );
  }
  export default Result;