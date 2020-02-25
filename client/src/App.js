import React, { useState } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import SavedList from './Movies/SavedList';
import Movie from './Movies/Movie';
import MovieList from './Movies/MovieList';

const App = () => {
  const [savedList, setSavedList] = useState( [] );
  const addToSavedList = movie => {
      let newMovie = true;
      savedList.forEach((oldMovie) => {
        if (movie.id === oldMovie.id) {
          newMovie = false;
        }
      })
      if (newMovie) {
        setSavedList( [...savedList, movie] );
      }
  };

  return (
    <div>
      <SavedList list={savedList} />
      <Switch>
        <Route path="/movies/:id">
          <Movie addToSavedList={addToSavedList}/>
        </Route>
        <Route path="/">
          <MovieList />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
