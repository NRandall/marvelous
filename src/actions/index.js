import { debounce } from 'lodash';
import marvel from '../api/marvel';

// Filters list of found characters so that variants of characters are grouped with the most popular variant shown.
// Also removes characters that have 0 stories
const filterVariantCharacters = (res) => {
    const characterIndex = {};
    const results = [];
    res.data.data.results.forEach((character) => {
        let coreCharacter = character.name.replace(/ \(.*/, '').replace(/\/.*/, '').toLowerCase();
        character.thumbnail.path = character.thumbnail.path.replace('http', 'https');
        if (characterIndex[coreCharacter] === undefined) {
            characterIndex[coreCharacter] = results.length;
            results.push({
                name: character.name.replace(/ \(.*/, ''),
                main: character,
                variants: [],
            });
        } else {
            // Check character popularity base on how many stories they appear in, if they are more popular, assume they are the main variant
            if (character.stories.available < results[characterIndex[coreCharacter]].main.stories.available) {
                results[characterIndex[coreCharacter]].variants.push(character);
            } else {
                results[characterIndex[coreCharacter]].variants.push(results[characterIndex[coreCharacter]].main);
                results[characterIndex[coreCharacter]].main = character;
            }
        }
    });
    return results.filter((character) => character.main.stories.available > 0);
};

// Gets a list of characters based on user query (matches start of name)
const searchForCharacter = debounce(async (dispatch, query) => {
    if (query && query.trim() !== '' && query.length > 1) {
        const res = await marvel.get('/v1/public/characters', {
            params: {
                nameStartsWith: query,
            },
        });

        dispatch({
            type: 'GET_CHARACTERS',
            payload: filterVariantCharacters(res),
        });
    } else {
        dispatch({
            type: 'GET_CHARACTERS',
            payload: [],
        });
    }
}, 500);

// Calls the debounced character api function
export const getCharacters = (query) => (dispatch) => searchForCharacter(dispatch, query);

export const setQuery = (query) => {
    return {
        type: 'SET_QUERY',
        payload: query,
    };
};

export const addMember = character => {
    return {
        type: 'ADD_MEMBER',
        payload: character
    }
}