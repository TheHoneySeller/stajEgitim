import React from 'react';
import './App.css';
import MyComponent from './components/MyComponent'

function App() {
	

  return (
    <div className="App">
    	<MyComponent name = "Faruk" >cocuk bir</MyComponent>
    	<MyComponent name = "okan" abc = "12d3">çocuk iki</MyComponent>
    </div>
  );
}

export default App;
