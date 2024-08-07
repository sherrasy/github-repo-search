import { GridSortDirection } from "@mui/x-data-grid";

export const sortingParams = ['asc', 'desc', null] as GridSortDirection[];

export const ResultFieldName = {
    Name:'Название',
    Language:'Язык',
    Forks:'Число форков',
    Stars:'Число звезд',
    Date:'Дата обновления',
  } as const;