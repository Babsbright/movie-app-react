import React from 'react-dom';
import {BrowserRouter as Router,Route, Routes } from 'react-router-dom'
import Nav from './nav';
import Item from './movieDetails';
import MovieList from './MovieList';
import Favorite from './favorite';
import './App.css';

function App() {
  return (
<Router>

<div className='App'>
<Nav />

<Routes>
   <Route path='/' element ={<MovieList  />} />
   <Route path='/favorite' element ={<Favorite />} />
   <Route path='/movieList/:id' element= {<Item />}/>
  </Routes>
</div>

</Router>
  );
}



export default App;
