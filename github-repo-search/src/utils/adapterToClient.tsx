import { Repository, RepositoryData } from "@frontend-types/repository.interface";

export const adaptRepositoryToClient = (repository: RepositoryData): Repository => ({
    id: repository.id,
    name: repository.name,
    description: repository.description,
    license: repository.license !== null ? { id: repository.license.spdx_id, url: repository.license.url } : repository.license,
    language: repository.language,
    forks: repository.forks,
    rating: repository.stargazers_count,
    updatedAt: repository.updated_at,
    topics: repository.topics,
});

export const adaptRepositoriesToClient = (repositories: RepositoryData[]): Repository[] =>
    repositories.map((repository: RepositoryData) => adaptRepositoryToClient(repository));
