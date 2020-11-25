import React from 'react';
import { data } from '../data';
import Navbar from './Navbar';
import MovieCard from './MovieCard';

import {addMovies,showFavourite} from '../action/index';
class App extends React.Component {

componentDidMount(){
  //make api call
  //dispatch action
const {store}=this.props;
// console.log('STORE',store);
store.subscribe(()=>{
console.log('UPDATED')
this.forceUpdate();
});
  store.dispatch(addMovies(data));

console.log('STATE',this.props.store.getState());
}
isMovieFavourite=(movie)=>{
const {movies}=this.props.store.getState();

const index=movies.favourites.indexOf(movie);
if(index!==-1){
//found the movie
return true;
}
return false;
}
onChangeTab=(val)=>{
this.props.store.dispatch(showFavourite(val));

}
render(){

const {movies,search}=this.props.store.getState();//{movies:{},search:{}}
const {list,favourites,showFavourite}=movies;
console.log('RENDER',this.props.store.getState());
const displayMovies=showFavourite  ? favourites:list;


return (
  <div className="App">
  <Navbar dispatch={this.props.store.dispatch} search={search}/>
  <div className="main">
  <div className="tabs">
  <div className={`tab ${showFavourite ? '': 'active-tabs'}`} onClick={()=>this.onChangeTab(false)}>Movies
  </div>
  <div className={`tab ${showFavourite ? 'active-tabs':'' }`} onClick={()=>this.onChangeTab(true)}>Favourites
  </div>
  </div>
  <div className="list">
  {displayMovies.map((movie,index) => (
    <MovieCard
      movie={movie}
      key={`movies-${index}`} dispatch={this.props.store.dispatch}
      isFavourite={this.isMovieFavourite(movie)}/>
  ))}
  </div>

  {displayMovies.length===0 ? <div className="no-movies">No movies to display !</div>: null}
  </div>
  </div>
);
  }
}

export default App;
