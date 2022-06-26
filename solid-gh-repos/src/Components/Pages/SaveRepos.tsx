import { Component, createSignal, For } from 'solid-js';
import RepoCard, { Repo } from '../RepoCard';


const reposFromLocalStorage = JSON.parse(localStorage.getItem('savedRepos') || '[]')
const  [savedRepos, setSavedRepos] = createSignal(reposFromLocalStorage as Repo[])

const SaveRepos: Component = () => {
    return (
        <div>
            <h2>Your Saved Repos</h2>
            <For each={savedRepos()}>
                {(repo: Repo) => <RepoCard repo={repo}/>}</For>
        </div>
    )
}

export {setSavedRepos, savedRepos}
export default SaveRepos;