import { Layout } from '../../components/Layout/Layout';
import { AppRouter } from '../../App.router';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';

export function App() {
  return (
    <BrowserRouter>
      <Layout>
        <AppRouter />
      </Layout>
    </BrowserRouter>
  );
}
