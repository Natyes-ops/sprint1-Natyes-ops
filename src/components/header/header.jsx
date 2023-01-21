import { User } from '../user';

import logo from './logo.svg';

import './header.css';

export const Header = () => (
    <header className='header'>
        <img className='logo' src={logo} alt='Cleverland' />
        <h3>Библиотека</h3>
        <User/>
    </header>
)