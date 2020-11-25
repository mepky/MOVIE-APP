// import {action } from 'redux';
import {combineReducers} from 'redux';
import {
    ADD_MOVIES 
    ,ADD_FAVOURITE
    ,REMOVE_FAVOURITE
    ,SHOW_FAVOURITE
    ,ADD_SEARCH_RESULT,
    ADD_MOVIE_TO_LIST
                 } 
                 from '../action';

const initialMoviesState={
    list:[],
    favourites:[],
    showFavourites:false
}
export function movies(state = initialMoviesState, action) {

//     if (action.type === ADD_MOVIES) {
//         return{
//         ...state,
//         list:action.movies
//         }
//     }
//     return state;
switch(action.type){
    case ADD_MOVIES:
        return{
            ...state,
            list:action.movies
        }
        case ADD_FAVOURITE:
            return{
                ...state,
                favourites:[action.movie, ...state.favourites]
            }
            case REMOVE_FAVOURITE:
                const filteredArray=state.favourites.filter(
                    movie=>movie.Title!==action.movie.Title
                );
                return{
                    ...state,
                    favourites:filteredArray
                };
                case SHOW_FAVOURITE:
                    return{
                        ...state,
                        showFavourite:action.val
                    };
                    case ADD_MOVIE_TO_LIST:
                        return {
                            ...state,
                            list:[action.movie, ...state.list]
                        };
            default:
                return state;

}
}
const initialSearchState={
    result:{},
    showSearchResults:false
}
export  function search(state=initialSearchState,action){
    // ADD_SEARCH_RESULT
    switch(action.type){
        case ADD_SEARCH_RESULT:
            return{
                ...state,
                result:action.movie,
                showSearchResults:true
            }

            case ADD_MOVIE_TO_LIST:
                return {
                    ...state,
                    showSearchResults:false
                };
            default:
                return state;
    }
}
//Root reducer is parent reducer for every reducer
// const initialRootState={
//     movies:initialMoviesState,
//     search:initialSearchState
// }
// export default function rootReducer(state=initialRootState,action){
//     return{
//         movies:movies(state.movies,action),
//         search:search(state.search,action)
//     }
// }
export default combineReducers({
    
        movies:movies,
        search:search
    
})