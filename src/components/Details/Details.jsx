import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

function Details() {
  const dispatch = useDispatch();





  return (
    <div>
      <h1>All the deets!</h1>
      <button>Back to Home</button>
    </div>
  )
}

export default Details;