import { Link } from 'react-router-dom';

import { User } from '../user';

import logo from './logo.svg';
import menu from './Menu.svg';

import './header.css';

export const Header = () => (
    <header className='header'>
        <Link to="/" className='logo-link'><img className='logo' src={logo} alt='Cleverland' /></Link>
        <img className='menu-mob' src={menu} alt='Cleverland' />
        <h3>Библиотека</h3>
        <User/>
    </header>
)