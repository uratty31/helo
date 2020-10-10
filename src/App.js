import React from 'react';
import './App.css';
import Post from './Components/Post/Post';
import Nav from './Components/Nav/Nav';
import Form from './Components/Form/Form';
import Dashboard from './Components/Dashboard/Dashboard';
import Auth from './Components/Auth/Auth';

function App() {
  return (
    <div className="App">
      <Post></Post>
      <Nav></Nav>
      <Form></Form>
      <Dashboard></Dashboard>
      <Auth></Auth>
    </div>
  );
}

export default App;
