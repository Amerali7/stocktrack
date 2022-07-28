import { useState } from 'react';
import Portfolio from './Components/Portfolio/Portfolio';
import PortfolioMonitor from './Components/PortfolioMonitor/PortfolioMonitor';
import './App.css';
import Header from "./Components/Header/Header";
import Calendar from "./Components/Calendar/Calendar";


function App() {
    //State of the stocks
    const [stocks, setStocks] = useState([]);
    //State of Portfolio or PortfolioMonitor component to be shown
    const [isPortfolioReady, setIsPortfolioReady] = useState(false);
    
    



  return (
    <div className="App">
      <Header />
      <br />
      
      <div>
                 {/* If user is ready with portfolio shows PortfolioMonitor */}
                {!isPortfolioReady ? (
                    <div className='portfolio-configuration'>
                        <Portfolio stocks={stocks} setStocks={setStocks} />
                        <div className='portfolio-button-continue-wrapper'>
                            <button
                                className='portfolio-button-continue'
                                onClick={() => setIsPortfolioReady(true)}
                            >
                               
                                <span>Continue</span>
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className='portfolio-monitor'>
                        <div className='portfolio-button-back-wrapper'>
                            <button
                                className='portfolio-button-back'
                                onClick={() => setIsPortfolioReady(false)}
                            >
                                <span>Go back to Portfolio</span>
                            </button>
                        </div>
                        <PortfolioMonitor
                            stocks={stocks}
                            setStocks={setStocks}
                        />
                       
                    </div>
                )}
                
            </div>
            
                    <br />
                    <h1>IPO Calender</h1>
                    <div className="cal">
                    <br />
                    <Calendar />
                    </div>
                    
            
    </div>
    
  );
}

export default App;
