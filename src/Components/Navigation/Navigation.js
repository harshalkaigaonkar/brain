import React from 'react';
import './Navigation.css';

const Navigation = ({ onRouteChange , isSignedIn }) => {
        if(isSignedIn) {
            return (
                <nav style={{display: 'flex', justifyContent: 'flex-end'}} className='pa4'>
                      <button onClick={() => onRouteChange('SignOut')}
                      className='f3 link grow black pa2 pointer'> Sign Out </button>
                 </nav>
            );
        }
        else {
            return (
                <nav style={{display: 'flex', justifyContent: 'flex-end'}} className='pa4'>
                      <button onClick={() => onRouteChange('SignIn')}
                      className='f3 link grow black pa2 pointer'>Sign Out</button>
                      <br />
                      <button onClick={() => onRouteChange('Register')}
                       className='f3 link grow black pa2 pointer'>Register</button>
                </nav> 
            );
    }
}

export default Navigation;