import { Component, createSignal, For } from 'solid-js';
import RepoCard, { Repo } from '../RepoCard';


const  [savedRepos, setSavedRepos] = createSignal([] as Repo[])

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