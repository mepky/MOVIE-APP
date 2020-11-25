//ACTION TYPES
export const ADD_MOVIES = 'ADD_MOVIES';

export const ADD_FAVOURITE = 'ADD_FAVOURITE';

export const REMOVE_FAVOURITE = 'REMOVE_FAVOURITE';

export const SHOW_FAVOURITE = 'SHOW_FAVOURITE';
export const ADD_SEARCH_RESULT = 'ADD_SEARCH_RESULT';
export const ADD_MOVIE_TO_LIST = 'ADD_MOVIE_TO_LIST';
//action creators
export function addMovies(movies) {
    return {
        type: ADD_MOVIES,
        movies
    }
}

export function addFavourite(movie) {
    return {
        type: ADD_FAVOURITE,
        movie
    }
}

export function removeFavourite(movie) {
    return {
        type: REMOVE_FAVOURITE,
        movie
    }
}


export function showFavourite(val) {
    return {
        type: SHOW_FAVOURITE,
        val
    };
}
export function addMovieToList(movie) {
    return {
        type: ADD_MOVIE_TO_LIST,
        movie
    }
}


//thunk
export function handleMovieSearch(movie) {
    const url = `http://www.omdbapi.com/?apikey=56bf19be&t=${movie}`;

    return function(dispatch) {

        fetch(url).then(response => response.json())
            .then(movie => {
                console.log('movie', movie);
                dispatch(addMovieSearchResult(movie));

            })
    }

    //dispatch an action
    //dispatch 


    // {type:'ADD_SEARCH_RESULT',movie}

}

export function addMovieSearchResult(movie) {
    return {
        type: ADD_SEARCH_RESULT,
        movie
    }
}