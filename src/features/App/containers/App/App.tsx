import { Layout } from 'features/Layout';
import { store } from 'features/Store';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from '../../App.router';

export function App() {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout>
          <AppRouter />
        </Layout>
      </BrowserRouter>
    </Provider>
  );
}
