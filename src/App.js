import React from 'react';
import './Styles/App.css';
import Banner from './Components/Banner/Banner';
import Calculator from './Components/Calculator/Calculator';
import HistoryList from './Components/History/History'
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Banner/>
        <Calculator/>
        <HistoryList/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
