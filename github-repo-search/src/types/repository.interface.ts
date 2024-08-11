// Интерфейсы репозиториев
// ------

// Интерфейс репозитория, который сохраняется в store и используется в приложении
export interface Repository {
  id: number; // уникальный идентификатор
  name: string; // название
  description: string; //описание
  license: string; // код лицензии или not asserted в случае отсутствия таковой 
  language: string | null; // основной язык репозитория
  forks: number; // число форков
  rating: number; // число звезд
  updatedAt: string; // дата обновления
  topics: string[]; // топики отмеченные в репозитории в деталях
}

// Тип лицензии репозитория, который получается с API
export type LicenceData = {
  key: string;
  name: string;
  spdx_id: string;
  url: string | null;
  node_id: string;
} | null;

//Интерфейс репозитория, который получается с API
export interface RepositoryData {
  id: number;
  name: string;
  description: string;
  license: LicenceData
  language: string | null;
  forks: number;
  stargazers_count: number;
  updated_at: string;
  topics: string[];
}

// Интерфейс списка репозиториев, который получается с API
export interface RepositoriesData {
  total_count: number;
  incomplete_results: boolean;
  items: RepositoryData[];
}
