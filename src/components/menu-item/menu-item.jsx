import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import './menu-item.css'

export const MenuItem = (props) => {
    const root = useLocation();
    const activeLink = () => root.pathname ===  '/' ? 'active': '';
    
    return(<li className='menu-list__item body-l'>
    {
        props.item.id === 0 ?
        <NavLink to={`/books/${props.item.category}`} className={`title ${activeLink()}`}><span className="title">{props.item.title} </span><span className="count body-s black40">{props.item.count}</span></NavLink>
        :
        <NavLink to={`/books/${props.item.category}`} className="title"><span className="title">{props.item.title} </span><span className="count body-s black40">{props.item.count}</span></NavLink>
    } 
</li> 
)
}



