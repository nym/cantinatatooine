import React, { useState } from 'react';

export function PersonDetailPage() {

  const data = {homeworld: ".", hairColor: "blue", name: "Luke", eyeColor: "red", gender: "male", filmList: "1 2 3"}
    return (
      <div>
        <div>
            <h1>{data.name}</h1>
            <div>Homeworld: { data.homeworld }</div>
            <div>Hair Color: {data.hairColor}</div>
            <div>Eye Color: {data.eyeColor}</div>
            <div>Gender: {data.gender}</div>,
            <hr/>
            Films: {data.filmList}
        </div>
      </div>
    )
  }
  
  export default PersonDetailPage;