import React from 'react';
import Home from './home';
import Search from './search';
import Contacts from './vehicles';

export default class Navbar extends React.Component {
    render() {
        return (
            <div className='nav-bar'>
                <Home/>
                <Contacts/>
                <Search/>
            </div>
        )
    }
}