import React from 'react';
import styled from 'styled-components';

const Loader = () => {
  return (
    <StyledWrapper>
      <div className="loader">
        <div className="square" id="sq1" />
        <div className="square" id="sq2" />
        <div className="square" id="sq3" />
        <div className="square" id="sq4" />
        <div className="square" id="sq5" />
        <div className="square" id="sq6" />
        <div className="square" id="sq7" />
        <div className="square" id="sq8" />
        <div className="square" id="sq9" />
      </div>
      <div className="loading-text">
        {
          "Loading...".split("").map((char, i) => (
            <span key={i} style={{ animationDelay: `${i * 0.1}s` }}>
              {char}
            </span>
          ))
        }
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;

  @keyframes loader_5191 {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes fadeInChar {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  .loader {
    position: relative;
    width: 60px;
    height: 60px;
    margin-bottom: 20px;
  }

  .square {
    background: #ccc;
    width: 10px;
    height: 10px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -5px;
    margin-left: -5px;
  }

  #sq1 { margin-top: -25px; margin-left: -25px; animation: loader_5191 675ms ease-in-out 0s infinite alternate; }
  #sq2 { margin-top: -25px; animation: loader_5191 675ms ease-in-out 75ms infinite alternate; }
  #sq3 { margin-top: -25px; margin-left: 15px; animation: loader_5191 675ms ease-in-out 150ms infinite; }
  #sq4 { margin-left: -25px; animation: loader_5191 675ms ease-in-out 225ms infinite; }
  #sq5 { animation: loader_5191 675ms ease-in-out 300ms infinite; }
  #sq6 { margin-left: 15px; animation: loader_5191 675ms ease-in-out 375ms infinite; }
  #sq7 { margin-top: 15px; margin-left: -25px; animation: loader_5191 675ms ease-in-out 450ms infinite; }
  #sq8 { margin-top: 15px; animation: loader_5191 675ms ease-in-out 525ms infinite; }
  #sq9 { margin-top: 15px; margin-left: 15px; animation: loader_5191 675ms ease-in-out 600ms infinite; }

  .loading-text {
    color: gray;
    font-size: 1.2rem;
    font-family: monospace;
    display: flex;
    gap: 2px;
  }

  .loading-text span {
    opacity: 0;
    animation: fadeInChar 0.2s ease forwards;
  }
`;

export default Loader;
