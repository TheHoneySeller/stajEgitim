import React from 'react';
import './App.css';
import MyComponent from './components/MyComponent'
import MyDataComponent from './components/MyDataComponent'
import MyForm from './components/form'

function App() {
	

  return (
    <div className="App">
    	<MyDataComponent></MyDataComponent>
    	<MyForm></MyForm>
    </div>
  );
}

export default App;
