import React from 'react';
import './App.css';
import MyComponent from './components/MyComponent'
import MyDataComponent from './components/MyDataComponent'

function App() {
	

  return (
    <div className="App">
    	<MyDataComponent></MyDataComponent>
    	<MyComponent name = "Faruk" >cocuk bir</MyComponent>
    	<MyComponent name = "okan" abc = "12d3">çocuk iki</MyComponent>
    </div>
  );
}

export default App;
