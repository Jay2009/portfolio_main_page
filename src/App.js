import React from 'react';

function Food({fav}) {
  return <h1> this is {fav}</h1>
}

//const foodIlike = {[]};

function App() {
  return (
    <div>
      <h1>hello?</h1>
      <Food fav="kimchi" />
      <Food fav="ramen" />
    </div>
  );
}

export default App;
