import { NavLink } from 'react-router-dom';

import  { MenuItem }  from '../menu-item';

import './menu.css';
// menu-list__title h5
export const MenuList = ({items}) => (<nav className="menu">
        <h5 className="menu-title h5">Витрина книг</h5>
        <ul className="menu-list">
            {items.map(item => 
                <MenuItem item={item} key={item.id}/>
            )}
        </ul>
        <h5 className='menu-link'><NavLink to="/terms">Правила пользования</NavLink></h5>
        <h5 className='menu-link'><NavLink to="/contract">Договор оферты</NavLink></h5>
    </nav>
)
