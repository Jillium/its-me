import React from 'react';



function Nav(props) {
  
    

    const {
        categories = [],
        setCurrentCategory,
        currentCategory
    } = props;
    
  
     return (
        <ul className="nav">
            {categories.map((category) => (
                <li
                    className={`nav-item ${ currentCategory.name === category.name && 'navActive'}`
            } key={category.name}
                >
                    <span onClick={() => {
                        setCurrentCategory(category)
                    }} >
                        {category.name}
                    </span>
                </li>
            ))}
        </ul>
    )
}

export default Nav;