import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function Details() {
  const dispatch = useDispatch();

const details = useSelector((store) => store.details);


// returned 0 to avoid changing the query 
  return (
    <div>
      <h1>All the deets!</h1>
      <div>
        <h2>{details[0].title}</h2>
        <img src={details[0].poster}/>
        <p>{details[0].description}</p>
        {details.map((genre) => {
          return (  <div>
            <ul>
            <li>
              {genre.name} 
            </li>
          </ul>
          </div>
          )
        })}
      </div>
      <button>Back to Home</button>
    </div>
  )
}

export default Details;