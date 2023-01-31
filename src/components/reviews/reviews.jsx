import { Review } from '../review';

import './reviews.css';

export const Reviews = (props) => {
    const {reviews} = props.propsBook;
    const cls = reviews.length ? 'title' : 'title reviews-no';

    return ( 
        <div className="reviews">
            <h5 className={cls}>{props.title} <span className="count body-s">{reviews.length}</span></h5>
            <div className="reviews-list">
                {reviews.map(el => <Review {...el} key={el.id}/>)}
            </div>
            <button className='btn btn-review btn-l' type='button'>
                оценить книгу
            </button>
        </div>
    );
}
 