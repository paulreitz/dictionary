import { Setter } from 'solid-js';
import entry from '../types/entry';
import DisplayState from '../types/display-state';

export default class DictionaryService {

    constructor (
        private setEntry: Setter<entry | null>,
        private setDisplayState: Setter<DisplayState>,
    ) {}

    async getWord (word: string) {
        this.setDisplayState(DisplayState.LOADING);
        const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
        if (!res.ok) {
            this.setDisplayState(DisplayState.NOT_FOUND);
            return;
        }
        const data = await res.json();
        console.log(data);
        this.setEntry(data);
        this.setDisplayState(DisplayState.LOADED);
    }
}