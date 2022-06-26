import { Component } from 'solid-js';
import { setSavedRepos, savedRepos } from './Pages/SaveRepos';

export type Repo = {
    id: string
    html_url: string
    name: string
    description: string
    stargazers_count: string
    language: string
    license: {
        name: string
    } 
    owner: {
        login: string
    }
}

interface Props {
    repo: Repo
}

const saveRepo = (repo: Repo) => {
    setSavedRepos([repo, ...savedRepos()])
    localStorage.setItem(`savedRepos`, JSON.stringify(savedRepos()))
    console.log(repo)
}

const unsaveRepo = (repoId: string) => {
    const nextState = savedRepos()?.filter(item => item.id !== repoId)
    setSavedRepos(nextState)
    localStorage.setItem(`savedRepos`, JSON.stringify(savedRepos()))
}

const repoIsSaved = (repoId: string) => {
    const repo = savedRepos()?.filter(item => item.id === repoId)
    return repo?.length > 0
}

const RepoCard: Component<Props> = ({repo}) => {
    return (
        <div class='card'>
            <div class='card-header'>&#11088; Stars: {repo.stargazers_count}</div>
            <div class='card-body'>
                <a href={repo.html_url} class='h4 card-title text-decoration-none' target='_blank' rel='noreferer'>
                 <strong>{repo.owner?.login}</strong>/{repo.name}
                </a>
                <p class='card-text'>{repo.description}</p>
                <p class='card-text'>{repo.language}</p>

                {repoIsSaved(repo.id) ? 
                    (
                        <button class='btn btn-danger' onClick={ () => unsaveRepo(repo.id)}> Remove </button>
                        ) : (
                        <button class='btn btn-success' onClick={ () => saveRepo(repo)}> Save </button>
                    )
                }
                
            </div>
        </div>

    )
} 

export default RepoCard;