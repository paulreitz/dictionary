export interface definition {
    definition: string;
    synonyms: string[];
    antonyms: string[];
    example?: string;
}

export interface meanings {
    partOfSpeech: string;
    definitions: definition[];
}

export interface word {
    word: string;
    phonetic: string;
    phonetics: {
        text: string;
        audio: string;
        sourceUrl?: string;
        license?: {
            name: string;
            url: string;
        };
    }[];
    meanings: meanings[];
    origin?: string;
    license?: {
        name: string;
        url: string;
    };
}

type entry = word[];
export default entry;