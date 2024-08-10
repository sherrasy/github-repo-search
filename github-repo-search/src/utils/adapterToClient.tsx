import { Licence, LicenceData, Repository, RepositoryData } from "@frontend-types/repository.interface";

const adaptLicence = (license:LicenceData) :Licence =>{
    if( !license || !license.url){
        return {id: "Not asserted", url:null}
    }
    return { id: license.spdx_id, url: license.url } 
}

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

export const adaptRepositoriesToClient = (repositories: RepositoryData[]): Repository[] =>
    repositories.map((repository: RepositoryData) => adaptRepositoryToClient(repository));
