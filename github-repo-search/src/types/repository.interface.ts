export interface Repository {
  id: string;
  name: string;
  description: string;
  license: string;
  language: string | null;
  forks: number;
  rating: number;
  updatedAt: string;
  topics: string[];
}

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

export interface RepositoriesData {
  search: {
    edges: RepositoryData[];
  };
}
