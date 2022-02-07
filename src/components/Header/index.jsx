import React from 'react';

import Nav from "../Nav";

function Header(props) {
    
    const {
        setCategorySelected
    } = props;


    

    
    

    return (
        <header className='header-bg'> 
           
            <h1 className='header-name'>Jill Holmes</h1>
            
            <Nav 
            setCategorySelected={setCategorySelected}
            />
        </header>
    )
}

export default Header;