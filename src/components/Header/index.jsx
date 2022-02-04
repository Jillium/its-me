import React, { useState } from 'react';

import Nav from "../Nav";

function Header() {

    const [categories] = useState([
        {
            name: 'About Me'
        },
        {
            name: 'Portfolio'
        },
        {
            name: 'Contact'
        },
        {
            name: 'Resume'
        }

    ]);

    const [currentCategory, setCurrentCategory] = useState(categories[0]);

    return (
        <header className='header-bg'> 
           
            <h1 className='header-name'>Jill Holmes</h1>
            
            <Nav 
            categories={categories}
            setCurrentCategory={setCurrentCategory}
            currentCategory={currentCategory}
            />
        </header>
    )
}

export default Header;