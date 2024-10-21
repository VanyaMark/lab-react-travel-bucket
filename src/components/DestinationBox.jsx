import React from 'react';
import "../App.css"

const DestinationBox = ({destinationsList, handleVisitedBtn}) => {
  return (
    <div className="container" >
    {destinationsList.map((destination, index) => {
      // console.log("from destinations json: ", destination)
      return (
        <div className="card" key={index}>
          <p>{destination.name}</p>
          <img src={destination.image} alt="destination" width={200} />
          <button onClick={()=>handleVisitedBtn(index)} >Visited</button>
        </div>
      );
    })}
  </div>
  )
}

export default DestinationBox