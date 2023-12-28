import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    setQuotes,
    setAccentColor,
    setCurrentQuote,
  } from '../Redux/quoteSlice';
const quoteURL = "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";
const colorsArr = ['4FC1FF', "E8B9AB", 'CB769E', '69995D', 'D2D7DF', '3AA7A3', 'ECA400', '006992', 'AFECE7', '81F499', '890620', 'B6465F', '8ACDEA'];
const Quote = () => {
    const dispatch = useDispatch();
    const { quotes, currentQuote, accentColor } = useSelector((state) => state.quote);

    const fetchData = async () => {
      try {
          const response = await fetch(quoteURL);
          const json = await response.json();
          dispatch(setQuotes(json.quotes));
      } catch (error) {
          console.error('Error fetching quotes:', error);
      }
    };
  
    const generateQuote = () => {
      if (quotes.length === 0) {
        fetchData();
      } else {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        const randomQuote = quotes[randomIndex];
        const randomColor =
          colorsArr[Math.floor(Math.random() * colorsArr.length)];
  
        dispatch(setCurrentQuote(randomQuote));
        dispatch(setAccentColor(`#${randomColor}`));
      }
    };
  
    useEffect(() => {
      fetchData();
    }, []);
  
    useEffect(() => {
      generateQuote();
    }, [quotes]); 
  
    return (
      <div className='card' id='wrapper' >
        <div id='quote-box' className='card-body rounded-3'>
          <div className='quote-text'>
            <p id='text' style={{color: accentColor}}>
              <i className='fa fa-quote-left'></i> {currentQuote.quote}
            </p>
          </div>
          <div className='quote-author'>
            <span id='author' style={{color: accentColor}}>{`- ${currentQuote.author}`}</span>
          </div>
          <div className='buttons'>
            <a
              id='tweet-quote'
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                `"${currentQuote.quote}" ${currentQuote.author} #quotes`
              )}`}
              className='button mt-4'
              style={{backgroundColor: accentColor}}
            >
              <i className='fa fa-twitter'></i>
            </a>
            <button
              onClick={generateQuote}
              id='new-quote'
              type='button'
              className='button mt-4'
              style={{backgroundColor: accentColor}}
            >
              New quote
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default Quote;