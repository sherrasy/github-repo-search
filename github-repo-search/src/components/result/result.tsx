import { ResultProps } from '@frontend-types/props.type';
import { DataGrid, GridColDef, GridRowParams, GridRowsProp } from '@mui/x-data-grid';
import { setCurrentRepository } from '@store/repository-data/repository-data';
import styles from '@styles/result.module.scss';
import { pageSizeParams, ResultFieldName, sortingParams } from '@utils/constant';
import { useAppDispatch } from '@utils/hooks';

function Result({ repositories }: ResultProps): JSX.Element {
  const dispatch = useAppDispatch();
  // Общие свойства для колонок таблицы
  const baseColumnParams = {
    headerClassName: styles.resultColumn,
    cellClassName: styles.resultCell,
    disableColumnMenu: true,
    resizable: false,
    sortingOrder: sortingParams,
  };

  // Ряды таблицы из полученых данных
  const rows: GridRowsProp = repositories ? repositories : [];

  // Колонки таблицы с настройками в зависимости от названия поля
  const columns: GridColDef[] = Object.entries(ResultFieldName).map(
    ([key, value]) => {
      const columnParams = {
        field: key,
        headerName: value,
        ...baseColumnParams,
      };

      switch (value) {
        case ResultFieldName.updatedAt:
          return {
            ...columnParams,
            type: 'date',
            valueGetter: (value: string) => (value ? new Date(value) : null),
          }
        case ResultFieldName.name:
        case ResultFieldName.language:
          return {
            ...columnParams,
            sortable: false,
          }
        default:
          return columnParams;
      }
    }
  );

  // Выбор репозитория для отображения деталей
  const handleRowSelect = (data: GridRowParams) =>
    dispatch(setCurrentRepository(data.row));

  return (
    <div className={styles.result}>
      <h1 className={styles.resultTitle}>Результаты поиска</h1>
      <DataGrid
        onRowClick={handleRowSelect}
        pageSizeOptions={pageSizeParams}
        initialState={{
          pagination: {
            paginationModel: { pageSize: pageSizeParams[0], page: 0 },
          },
        }}
        rows={rows}
        columns={columns}
        className={styles.resultTable}
      />
    </div>
  );
}
export default Result;
