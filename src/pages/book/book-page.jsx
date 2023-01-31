import { useLocation } from 'react-router-dom';

import { BookInfo } from '../../components/book-info';
import { Crumbs } from '../../components/crumbs';
import { Header } from '../../components/header';

import './book-page.css';

export const BookPage = () => {
    const {state} = useLocation();

    // eslint-disable-next-line no-console
    console.log(state);
    
    return(
    <div className="book-page">
        <div className="container">
            <Header/>
        </div>
        <Crumbs link={state.propsBook.title} category={state.propsBook.categoryRu}/>
        <main className="container book-main">
            <BookInfo date={state}/>
        </main>
    </div>

);
}
 