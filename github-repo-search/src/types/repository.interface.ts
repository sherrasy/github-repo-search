// Интерфейсы репозиториев
// ------

// Интерфейс репозитория, который сохраняется в store и используется в приложении
export interface Repository {
  id: string; // уникальный идентификатор
  name: string; // название
  description: string; //описание
  license: string; // код лицензии или not asserted в случае отсутствия таковой 
  language: string | null; // основной язык репозитория
  forks: number; // число форков
  rating: number; // число звезд
  updatedAt: string; // дата обновления
  topics: string[]; // топики отмеченные в репозитории в деталях
}

//Интерфейс репозитория, который получается с API
export interface RepositoryData {
  node: {
    id: string;
    name: string;
    description: string;
    licenseInfo: {
      spdxId: string;
    };
    primaryLanguage: {
      name: string;
    };
    forkCount: number;
    stargazerCount: number;
    repositoryTopics: {
      nodes: { topic: { name: string } }[];
    };
    updatedAt: string;
  };
}

// Интерфейс списка репозиториев, который получается с API
export interface RepositoriesData {
  search: {
    edges: RepositoryData[];
  };
}
