import { GridSortDirection } from "@mui/x-data-grid";

export const sortingParams = ['asc', 'desc'] as GridSortDirection[];

export const pageSizeParams = [ 10, 25, 100];

export const ResultFieldName = {
  name: 'Название',
  language: 'Язык',
  forks: 'Число форков',
  rating: 'Число звезд',
  updatedAt: 'Дата обновления',
} as const;

export const DefaultStoreName = {
  Reducer:"REPOSITORY",
  Action: 'fetch-repositories',
} as const;

export const API_URL = 'https://api.github.com/graphql'

export const AppMessages = {
  Greeting: 'Добро пожаловать',
  Loading: 'Loading...',
  Error: 'Произошла ошибка. Попробуйте снова.',
  DetailsInitial: 'Выберите репозиторий',
} as const;