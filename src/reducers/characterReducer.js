import { cloneDeep } from 'lodash';

export const charactersReducer = (characters = [], action) => {
    if (action.type === 'GET_CHARACTERS' && action.payload.data) {
        const characterIndex = {};
        const results = [];
        action.payload.data.results.forEach(character => {
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
                // Check character popularity base on how many stories they appear in,
                // If they are more popular, assume they are the main variant.
                // Else, put them in the variants collection
                if (character.stories.available < results[characterIndex[coreCharacter]].main.stories.available) {
                    results[characterIndex[coreCharacter]].variants.push(character);
                } else {
                    results[characterIndex[coreCharacter]].variants.push(results[characterIndex[coreCharacter]].main);
                    results[characterIndex[coreCharacter]].main = character;
                }
            }
        });
        // If characters appear in no stories, exclude them
        return results.filter(character => character.main.stories.available > 0);
    } else if (action.type === 'GET_CHARACTERS' && action.payload === 'reset') {
        return [];
    }
    return characters;
};

export const selectedCharacterDetailReducer = (selectedCharacterDetail = null, action) => {
    if (action.type === 'SET_SELECTED_CHARACTER') {
        return cloneDeep(action.payload);
    }
    return selectedCharacterDetail;
};

export const gettingCharactersReduce = (loading = null, action) => {
    if (action.type === 'GETTING_SEARCH') {
        return action.payload;
    } else if (action.type === 'GET_CHARACTERS') {
        if (action.payload === 'reset') return null;
        else if (action.payload.data.count > 0) return null;
        else return 'No Results Found';
    }
    return loading;
};
