import React, { useState } from "react";
import Tours from './component/Tours';
import data from './data';
const App = () => {
  const [tours, setTours] = useState(data);
  function removeTour(id)
  {
   const newTour = tours.filter(tour => tour.id !== id);
   setTours(newTour);

  }

  if(tours.length === 0)
  {
    return(
      <>
    <div className="refresh">Oops nothing more to show!!</div>
    <button className="btn-white" onClick={()=> setTours(data)}>Refresh</button>
    </>
    );
  }
  return(<div className="App">
 
 <Tours tours={tours} removeTour={removeTour}></Tours>

  </div>);
};

export default App;
