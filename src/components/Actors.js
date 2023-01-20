import React from "react";
import { actors } from "../data";

function Actors() {
    
return (
  <div>
    <h1>Actors Page</h1>
    {actors.map((actor, index) => {
  return (
      <div key={index}>
        {actor.name}
        <ul>
          {actor.movies.map((movie, index) => <li key={'Act_'+index}>{movie}</li>)}
        </ul>
      </div>
  )
})}
  </div>
)
}

export default Actors;
