import React, { useState, useEffect } from "react";
import './Body.css';

interface ExchangeRate {
    currency: string,
    exchangeRate: number
  }

export function Body() {
  const [currencies, setCurrencies] = useState([]);
  const [showCurrencies, setShowCurrencies] = useState(false);
  const [chosenCurrency, setCurrency] = useState('')
  const [showExchangeRate, setShowExchangeRate] = useState(false);
  const [rates, setRates] = useState<ExchangeRate[]>([])
  const [submit, setSubmit] = useState(false)


  useEffect(() => {
    fetch("/api/currency")
      .then((res) => res.json())
      .then((data) => setCurrencies(data));
  }, []);


  useEffect(() => {
    fetch(`/api/currency/${chosenCurrency}`)
      .then((res) => res.json())
      .then((data) => setRates(data.exchangeRates))
  }, [chosenCurrency]);

  const handleShowAllCurrencies = () => {
    setShowCurrencies(!showCurrencies);
  };

  const handleShowOneCurrencyRate = () => {
    setShowExchangeRate(!showExchangeRate)
    setSubmit(false)
  };

  const handleShowExchangeRateBetweenTwoCurrencies = () => {
    // Logic to show exchange rate between two currencies
    console.log('Show exchange rate between two currencies');
  };

  const handleSubmitButton = () => {
    setSubmit(!submit)
  }

  return (
    <div className="body-container">
      <h1 className="title">Welcome to RateXchange</h1>
      <div className="buttons">
        <div className="allCurrencies-container">
          <button onClick={handleShowAllCurrencies}>
            {showCurrencies ? 'Hide all available currencies' : 'Show all available currencies'}
          </button>
          {showCurrencies && (
          <div className="currency-list">
            <h2>Available Currencies</h2>
            <div>
              {currencies.map((elem, index) =>(
              <li key={index}>{elem}</li>))}
            </div>
          </div>)}
        </div>
        <div className="exchangeRate-container">
        <button onClick={handleShowOneCurrencyRate}>
          {showExchangeRate ? 'Hide exchange rates' : 'Check exchange rates'}
        </button>
        {showExchangeRate && (
          <div className="exchangeRates">
            <h2 className="exchangeRate-text">Choose one currency:</h2>
            <select className="exchangeRate-selector" onChange={(e) => setCurrency(e.target.value)}>
              <option>Available currencies:</option>
              {currencies.map((elem, index) =>(
              <option key={index}>{elem}</option>))}
            </select>
            <div>
              <button className="submitButton" onClick={handleSubmitButton}>
                {submit ? 'Hide' : 'Submit'}
              </button>
              {submit && 
              <ul className="exchangeRates-list">
                {rates.map((item, index) => (
                <li key={index} className="exchangeRate-listElement">
                  {item.currency}: {item.exchangeRate}
                </li>
                ))}
              </ul>
              }
            </div>
          </div>
        )}
        </div>
        <button onClick={handleShowExchangeRateBetweenTwoCurrencies}>Show exchange rate between two currencies</button>
      </div>
    </div>
  );
}

export default Body;
