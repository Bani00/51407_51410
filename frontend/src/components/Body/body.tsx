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
  const [firstCurrency, setFirstCurrency] = useState('')
  const [secondCurrency, setSecondCurrency] = useState('')
  const [showCurrencyComparison, setCurrencyComparison] = useState(false)
  const [compare, setCompare] = useState(false)
  const [compareValue, setCompareValue] = useState()


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

  useEffect(() => {
    fetch(`/api/currency/${firstCurrency}?compare_to=${secondCurrency}`)
      .then((res) => res.json())
      .then((data) => setCompareValue(data.exchangeRate))
  }, [firstCurrency, secondCurrency]);

  const handleShowAllCurrencies = () => {
    setShowCurrencies(!showCurrencies);
  };

  const handleShowOneCurrencyRate = () => {
    setShowExchangeRate(!showExchangeRate)
    setSubmit(false)
  };

  const handleShowExchangeRateBetweenTwoCurrencies = () => {
    setCurrencyComparison(!showCurrencyComparison)
    setCompare(false)
  };

  const handleSubmitButton = () => {
    setSubmit(!submit)
  }

  const handleCompareButton = () => {
    setCompare(!compare)
  }


  return (
    <div className="body-container">
      <h1 className="title">Welcome to RateXchange</h1>
      <div className="buttons">
        {/* Button - Show all available currencies */}
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
        {/* Button show exchange rates */}
        <div className="exchangeRate-container">
          <button onClick={handleShowOneCurrencyRate}>
            {showExchangeRate ? 'Hide exchange rates' : 'Check exchange rates'}
          </button>
          {showExchangeRate && (
          <div className="exchangeRates">
            <h2 className="exchangeRate-text">Choose one currency:</h2>
            <select className="exchangeRate-selector" defaultValue="" onChange={(e) => setCurrency(e.target.value)}>
              <option disabled={true} value="">Available currencies:</option>
              {currencies.map((elem, index) =>(
              <option key={index}>{elem}</option>))}
            </select>
            <>
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
              </ul>}
            </>
          </div>)}
        </div>
        {/* Button show currency comparison */}
        <div>
          <button onClick={handleShowExchangeRateBetweenTwoCurrencies}>
            {showCurrencyComparison ? 'Hide comparison' : 'Show ratio between 2 currencies'}
          </button>
          {showCurrencyComparison && (
            <div className="exchangeRates">
            <h2 className="exchangeRate-text">Choose first currency:</h2>
            <select className="exchangeRate-selector" defaultValue="" onChange={(e) => setFirstCurrency(e.target.value)}>
            <option disabled={true} value="">Available currencies:</option>
              {currencies.map((elem, index) => (
              <option key={index}>{elem}</option>))}
            </select>
            <h2 className="exchangeRate-text">Choose second currency:</h2>
            <select className="exchangeRate-selector" defaultValue="" onChange={(e) => setSecondCurrency(e.target.value)}>
            <option disabled={true} value="">Available currencies:</option>
              {currencies.map((elem, index) =>(
              <option key={index}>{elem}</option>))}
            </select>
            <>
              <button className="compareButton" onClick={handleCompareButton}>
                {compare ? 'Hide' : 'Compare'}
              </button>
              {compare && 
              <div className="currency-ratio">
                <span className="bold">{firstCurrency}</span>: {compareValue} {secondCurrency}
              </div>}
            </>
            </div>)}
        </div>
        
      </div>
    </div>
  );
}

export default Body;
