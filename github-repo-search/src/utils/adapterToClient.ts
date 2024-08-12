import { LicenceData, Repository, RepositoryData } from "@frontend-types/repository.interface";
// Функции для адаптирования полученых с API данных

// Лицензии - для отображения id или текста о ее отсутствии
const adaptLicence = (license:LicenceData) :string =>{
    if( !license || !license.url){
        return "Not asserted"
    }
    return license.spdx_id; 
}

// Одного репозитория
export const adaptRepositoryToClient = (repository: RepositoryData): Repository => ({
    id: repository.id,
    name: repository.name,
    description: repository.description,
    license: adaptLicence(repository.license),
    language: repository.language,
    forks: repository.forks,
    rating: repository.stargazers_count,
    updatedAt:repository.updated_at,
    topics: repository.topics,
});

// Получаемого списка репозиториев
export const adaptRepositoriesToClient = (repositories: RepositoryData[]): Repository[] =>
    repositories.map((repository: RepositoryData) => adaptRepositoryToClient(repository));
