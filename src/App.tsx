import React from 'react';
import { ThemeProvider } from '@emotion/react';
import { theme, GlobalStyle } from '@/styles';
import Router from '@/routes/Router';
import { useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './App.css';

function App() {
  const location = useLocation();
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <div className="App">
          <TransitionGroup className="transitions-wrapper">
            <CSSTransition
              key={location.pathname}
              timeout={300}
              classNames={'page'}
            >
              <Router></Router>
            </CSSTransition>
          </TransitionGroup>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
