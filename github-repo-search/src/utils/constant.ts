import { GridSortDirection } from "@mui/x-data-grid";

export const REDUCER_NAME = "REPOSITORY"

export const sortingParams = ['asc', 'desc'] as GridSortDirection[];

export const pageSizeParams = [ 10, 25, 100];

export const ResultFieldName = {
  name: 'Название',
  language: 'Язык',
  forks: 'Число форков',
  rating: 'Число звезд',
  updatedAt: 'Дата обновления',
} as const;

export const ActionName = {
  FetchRepositories: 'fetch-repositories',
} as const;

export const ApiConnectParam = {
  Url: 'https://api.github.com/search',
  Timeout: 5000
};

export const AppMessages = {
  Greeting: 'Добро пожаловать',
  DetailsInitial: 'Выберите репозиторий',
} as const;