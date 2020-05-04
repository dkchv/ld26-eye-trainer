import { Layout } from '../../components/Layout/Layout';
import { AppRouter } from '../../App.router';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../../state/store';

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
