import type { Component } from 'solid-js';
import { Switch, Match } from 'solid-js';
import DisplayState from './types/display-state';
import { displayState } from './state/dictionary-state';

import styles from './App.module.scss';

import SearchBar from './components/search-bar/search-bar';

import Loading from './components/loading/loading';
import NotFound from './components/not-found/not-found';
import Empty from './components/empty/empty';
import EntryDisplay from './components/entry-display/entry-display';


const App: Component = () => {
    return (
        <div class={styles.App}>
            <div class={styles.searchContainer}>
                <SearchBar />
            </div>
            <div class={styles.contentContainer}>
                <div class={styles.content}>
                    <Switch>
                        <Match when={displayState() === DisplayState.LOADING}>
                            <Loading />
                        </Match>
                        <Match when={displayState() === DisplayState.NOT_FOUND}>
                            <NotFound />
                        </Match>
                        <Match when={displayState() === DisplayState.EMPTY}>
                            <Empty />
                        </Match>
                        <Match when={displayState() === DisplayState.LOADED}>
                            <EntryDisplay />
                        </Match>
                    </Switch>
                </div>
            </div>
        </div>
    );
};

export default App;