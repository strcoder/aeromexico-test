import React from 'react';
import { Routes as Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Layout from './components/Layout';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path='/' element={<Home />} />
          <Route path='*' element={<NotFound />} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
