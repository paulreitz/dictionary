import { createSignal } from 'solid-js';
import entry from '../types/entry';
import DisplayState from '../types/display-state';
import DictionaryService from '../services/dictionary-service';
import mockData from '../mocks/sample-entry';

const [currentEntry, setCurrentEntry] = createSignal<entry | null>(null);
const [displayState, setDisplayState] = createSignal<DisplayState>(DisplayState.EMPTY);

const dictionaryService = new DictionaryService(setCurrentEntry, setDisplayState);

export { currentEntry, displayState, dictionaryService };