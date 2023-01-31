import { useState } from 'react';

import { BookList } from '../book-list';
import { Footer } from '../footer';
import { Header } from '../header';
import { MenuList } from '../menu';

import { booksData, itemsData } from './data'

import './app.css';

export const App = () => {
    const [items] = useState(itemsData);
    const [books] = useState(booksData);

    return(
        <div className='container'>
            <Header/>
            <div className="main">
                <MenuList items={items}/>
                <BookList books={books}/>
            </div>
            <Footer/>
        </div>
    )
}