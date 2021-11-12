import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import theme from './configs/theme';
import { ApolloProvider } from '@apollo/client';
import client from './configs/apollo';
import GlobalContext from './context/GlobalContext';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <ApolloProvider client={client}>
          <GlobalContext>
            <App />
          </GlobalContext>
        </ApolloProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
