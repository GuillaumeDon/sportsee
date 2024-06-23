import React from 'react';

function Navbar({className,logo, element1, element2, element3, element4}) {

    logo=false? className="hidden":className="visibe";
  return (
    <nav className={className}>
      <ul>
        <li>{element1}</li>
        <li>{element2}</li>
        <li>{element3}</li>
        <li>{element4}</li>
      </ul>
    </nav>
  );
}

export default Navbar;