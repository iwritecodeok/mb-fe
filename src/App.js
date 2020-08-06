import React from 'react';
import './Styles/App.scss';
import Banner from './Components/Banner/Banner';
import Calculator from './Components/Calculator/Calculator';
import HistoryList from './Components/History/History'
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Banner/>
        <Calculator/>
        <HistoryList/>
        <Footer/>
      </header>
    </div>
  );
}

export default App;
