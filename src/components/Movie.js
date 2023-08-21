import React from 'react';

import classes from './Movie.module.css';

const Movie = (props) => {
  const deleteMovie= async ()=>{
    const response= await fetch(`https://react-http-946b6-default-rtdb.firebaseio.com/movie/${props.id}.json`,{method:'DELETE'})
    props.cancel()
  }
  return (
    <li className={classes.movie}>
      <h2>{props.title}</h2>
      <h3>{props.releaseDate}</h3>
      <p>{props.openingText}</p>
      <button style={{backgroundColor:'purple'}} onClick={deleteMovie}>Delete</button>
    </li>
  );
};

export default Movie;
