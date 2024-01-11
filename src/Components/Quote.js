import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    setAccentColor,
    setCurrentQuote,
  } from '../app/quoteSlice';
import { useGetQuotesQuery } from '../app/api';
const colorsArr = ['4FC1FF', "E8B9AB", 'CB769E', '69995D', 'D2D7DF', '3AA7A3', 'ECA400', '006992', 'AFECE7', '81F499', '890620', 'B6465F', '8ACDEA'];

const Quote = () => {
    const dispatch = useDispatch();
    const {  currentQuote, accentColor } = useSelector((state) => state.quote);
    const { data } = useGetQuotesQuery();
    
    const generateQ = useCallback(() => {
      if (data) {
        const randomIndex = Math.floor(Math.random() * data.quotes.length);
        const randomQuote = data.quotes[randomIndex];
        const randomColor = colorsArr[Math.floor(Math.random() * colorsArr.length)];
        dispatch(setCurrentQuote(randomQuote));
        dispatch(setAccentColor(`#${randomColor}`));
      }
    }, [dispatch, data]);

    useEffect(() => {
      generateQ();
    }, [generateQ]);

    return (
      <div className='card w-40 position-absolute top-50 start-50 translate-middle' id='wrapper' >
        <div id='quote-box' className='card-body rounded-3 p-5'>
          {currentQuote ? (
            <>
              <div className='quote-text'>
                <p id='text' style={{color: accentColor}}>
                  <i className='fa fa-quote-left'></i> {currentQuote.quote}
                </p>
              </div>
              <div className='quote-author d-flex justify-content-end'>
                <span id='author' style={{color: accentColor}}>{`- ${currentQuote.author}`}</span>
              </div>
              <div className='buttons d-flex justify-content-between'>
                <a
                  id='tweet-quote'
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                    `"${currentQuote.quote}" ${currentQuote.author} #quotes`
                  )}`}
                  className='button mt-4 btn btn-light'
                  style={{backgroundColor: accentColor}}
                >
                  <i className='fa fa-twitter'></i>
                </a>
                <button
                  onClick={generateQ}
                  id='new-quote'
                  type='button'
                  className='button mt-4 btn btn-light'
                  style={{backgroundColor: accentColor}}
                >
                  New quote
                </button>
              </div>
            </>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    );
  };
  
export default Quote;