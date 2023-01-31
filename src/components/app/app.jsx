import { useState } from 'react';
import { useLocation } from 'react-router-dom';

import { BookList } from '../book-list';
import { ContractPage } from '../contract';
import { Footer } from '../footer';
import { Header } from '../header';
import { MenuList } from '../menu';
import { TermsPage } from '../terms';

import { booksData, itemsData } from './data'

import './app.css';

export const App = () => {
    const [items] = useState(itemsData);
    const [books] = useState(booksData);
    const root = useLocation();
    const activeLink = () => root.pathname ===  '/' ? <BookList books={books}/> : root.pathname ===  '/terms' ? <TermsPage/> : root.pathname ===  '/contract' ? <ContractPage/> : <BookList books={books}/>;

    return(
        <div className='container'>
            <Header/>
            <div className="main">
                <MenuList items={items}/>
                {activeLink()}
            </div>
            <Footer/>
        </div>
    )
}