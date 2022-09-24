import React from 'react';
import { NavBar } from "./components/NavBar/NavBar";
import { CartWidget } from "./components/CartWidget/CartWidget";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <CartWidget></CartWidget>
      <ItemListContainer></ItemListContainer>
    </div>
  );
}

export default App;
