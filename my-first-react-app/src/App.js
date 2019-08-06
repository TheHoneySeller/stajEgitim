import React from 'react';
import './App.css';
import MyForm from './components/form'
import MyTable from './components/MyTable'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


function App() {
	

  return (
    <div className="App">
      <Container>
        <Row>
          <Col><MyForm></MyForm></Col>
          <Col><MyTable></MyTable></Col>
        </Row>
        <Row>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
