import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Route, Routes } from 'react-router-dom';

import { MenuList } from './components/menu';
import { BookPage } from './pages/book';
import { ContractPage } from './components/contract';
import { MainPage } from './pages/main';
import { TermsPage } from './components/terms';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  // eslint-disable-next-line react/jsx-filename-extension
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path='/' element={<MainPage />} >
          <Route path='/' element={<MenuList to='/books/all'/>} />
          <Route path='/books/:category' element={<BookPage />} />
          <Route path='/terms' element={<TermsPage />} />
          <Route path='/contract' element={<ContractPage />} />
        </Route>
        <Route path='/books/:category/:bookId' element={<BookPage />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
