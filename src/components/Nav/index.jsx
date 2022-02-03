import React from 'react';

// import image from '../../../public/assets/header1.png';

function Nav() {

    const navCategories = [
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

    ]

    function categorySelected(name) {
        console.log(`${name} clicked`);
    }
    return (
        <ul className="nav">
            {navCategories.map((category) => (
                <li
                    className='nav-item'
                    key={category.name}
                >
                    <span onClick={() => categorySelected(category.name)} >
                        {category.name}
                    </span>
                </li>
            ))}
        </ul>
    )
}

export default Nav;