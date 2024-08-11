import { Repository, RepositoryData } from "@frontend-types/repository.interface";

const adaptLicence = (license:{spdxId:string}) :string =>{
    if( !license ){
        return "Not asserted"
    }
    return license.spdxId; 
}

const adaptTopics = (topics: { topic: { name: string } }[]) :string[] => topics.map((item)=> item.topic.name);

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

export const adaptRepositoriesToClient = (repositories: RepositoryData[]): Repository[] =>
    repositories.map((repository: RepositoryData) => adaptRepositoryToClient(repository));
