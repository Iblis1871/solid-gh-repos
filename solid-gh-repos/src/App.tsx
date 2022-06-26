import { Route, Routes } from 'solid-app-router';
import { Component, createEffect, createSignal } from 'solid-js';
import Nav from './Components/Nav';
import Home from './Components/Pages/Home';
import SaveRepos from './Components/Pages/SaveRepos';

const [username, setUsername] = createSignal(`fullSnack-NC`);
const [repos, setRepos] = createSignal([]);

createEffect(async () => {
  const res = await fetch(
    `https://api.github.com/users/${username()}/repos?sort=created`
  );
  setRepos(await res.json());
});

const App: Component = () => {
  return (
    <div class="container">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/savedrepos" element={<SaveRepos />} />
      </Routes>
    </div>
  );
};

export { username, setUsername, repos };
export default App;
