import React from 'react';
import Title from './Components/Title/Title';
import Board from './Components/Board/Board';
import Footer from './Components/Footer/Footer'
import background from './background.png'

function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${background})` }} >
      <Title />
      <Board />
      <Footer />
    </div>
  );
}

export default App;
