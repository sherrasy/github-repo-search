import { ResultProps } from '@frontend-types/props.type';
import {
  DataGrid,
  GridColDef,
  GridRowParams,
  GridRowsProp,
} from '@mui/x-data-grid';
import { setCurrentRepository } from '@store/repository-data/repository-data';
import styles from '@styles/result.module.scss';
import {
  pageSizeParams,
  ResultFieldName,
  sortingParams,
} from '@utils/constant';
import { useAppDispatch } from '@utils/hooks';

function Result({ repositories }: ResultProps): JSX.Element {
  const dispatch = useAppDispatch();
  const rows: GridRowsProp = repositories
    ? repositories.map((repository) => repository)
    : [];

  const columns: GridColDef[] = Object.entries(ResultFieldName).map(
    ([key, value]) => {
      const columnParams = {
        field: key,
        headerName: value,
        headerClassName: styles.resultColumn,
        cellClassName: styles.resultCell,
        disableColumnMenu: true,
        resizable: false,
        sortable: value !== ResultFieldName.name,
        sortingOrder: sortingParams,
      };

      if (value === ResultFieldName.updatedAt) {
       return {
          ...columnParams,
          type: 'date',
          valueGetter: (value:string) =>  value && new Date(value),
        };
      }

      return columnParams;
    }
  );

  const handleRowSelect = (data: GridRowParams) =>
    dispatch(setCurrentRepository(data.row));

  return (
    <div className={styles.result}>
      <h1 className={styles.resultTitle}>Результаты поиска</h1>
      <DataGrid
        onRowClick={handleRowSelect}
        pageSizeOptions={pageSizeParams}
        rows={rows}
        columns={columns}
        className={styles.resultTable}
      />
    </div>
  );
}
export default Result;
