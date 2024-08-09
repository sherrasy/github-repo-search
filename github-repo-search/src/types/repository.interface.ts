export interface Repository {
  id: number;
  name: string;
  description: string;
  license: {
    id: string;
    url: string | null;
  } | null;
  language: string | null;
  forks: number;
  rating: number;
  updatedAt: string;
  topics: string[];
}

export interface RepositoryData {
  id: number;
  name: string;
  description: string;
  license: {
    key: string;
    name: string;
    spdx_id: string;
    url: string | null;
    node_id: string;
  } | null;
  language: string | null;
  forks: number;
  stargazers_count: number;
  updated_at: string;
  topics: string[];
}

export interface RepositoriesData {
  total_count: number;
  incomplete_results: boolean;
  items: RepositoryData[];
}
