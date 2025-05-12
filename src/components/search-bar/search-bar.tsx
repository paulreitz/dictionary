import { Component, createSignal } from 'solid-js';
import { Toolbar, TextField, IconButton } from '@suid/material';
import  Search  from '@suid/icons-material/Search';
import styles from './search-bar.module.scss';
import { dictionaryService, displayState } from '../../state/dictionary-state';
import DisplayState from '../../types/display-state';

const SearchBar: Component = () => {
    const [word, setWord] = createSignal('');

    const handleSearch = () => {
        if (word().trim()) {
            dictionaryService.getWord(word().trim());
        }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    };

    const handleInput = (e: any) => {
        setWord(e.target.value);
    };

    return (
        <Toolbar class={styles.container}>
            <TextField
                fullWidth
                label='Search for a word'
                variant='outlined'
                value={word()}
                onChange={handleInput}
                onKeyDown={handleKeyDown}
                class={styles.searchInput}
            />
            <IconButton
                color='primary'
                onClick={handleSearch}
                disabled={displayState() === DisplayState.LOADING}
                class={styles.searchButton}
            >
                <Search />
            </IconButton>
        </Toolbar>
    );
};

export default SearchBar;