import { Repository, RepositoryData } from "@frontend-types/repository.interface";
// Функции для адаптирования полученых с API данных

// Лицензии - для отображения id или текста о ее отсутствии
const adaptLicence = (license:{spdxId:string}) :string =>{
    if( !license ){
        return "Not asserted"
    }
    return license.spdxId; 
}

// Топиков репозитория
const adaptTopics = (topics: { topic: { name: string } }[]) :string[] => topics.map((item)=> item.topic.name);

// Одного репозитория
export const adaptRepositoryToClient = ({node:{id, name, description, licenseInfo, primaryLanguage, forkCount, stargazerCount, updatedAt, repositoryTopics }}: RepositoryData): Repository => ({
    id: id,
    name: name,
    description: description,
    license: adaptLicence(licenseInfo),
    language: primaryLanguage.name,
    forks: forkCount,
    rating: stargazerCount,
    updatedAt:updatedAt,
    topics: adaptTopics(repositoryTopics.nodes),
});

// Получаемого списка репозиториев
export const adaptRepositoriesToClient = (repositories: RepositoryData[]): Repository[] =>
    repositories.map((repository: RepositoryData) => adaptRepositoryToClient(repository));
