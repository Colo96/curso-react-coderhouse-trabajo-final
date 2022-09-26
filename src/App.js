import React from 'react';
import { NavBar } from "./components/NavBar/NavBar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <ItemListContainer greeting="Curso React"></ItemListContainer>
    </div>
  );
}

export default App;
