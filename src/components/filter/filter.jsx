import sicon from './Search.svg';
import ficon from './Sort-ascending.svg';

import './filter.css';

export const Filter = (props) => (
    <form action="" className="filter">
        <div className="input" >
            <input className="filter-search body-s" type="text" placeholder="Поиск книги или автора..."/>
            <img className='filter-search__icon' src={sicon} alt='search'/>
        </div>
        <div className="input">
            <select className="filter-select black40 body-s" name="rating" id="rating">
                <option value="-">По рейтингу</option>
            </select>
            <img className='filter-select__icon' src={ficon} alt='search'/>
        </div>
        <input className={props.view === 'grid' ? 'btn-f btn-grid active' : 'btn-f btn-grid'} type="button" onClick={() => props.onClick('grid')} data-test-id='button-menu-view-window'/>
        <input className={props.view === 'line' ? 'btn-f btn-line active' : 'btn-f btn-line'} type="button" onClick={() => props.onClick('line')} data-test-id='button-menu-view-list'/>
    </form>
)

