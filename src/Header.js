import React from "react";
import './Header.css';

const Header = () => {
    return ( 
    <div className="section__header">
        <nav className="section__header--nav">
            <a href="#crypto">Crypto</a>
            <a href="#news">News</a>
        </nav>
        
        <div className="section__header--hero">
            <h1>All you need to know about crypto in one place.</h1>
            
        </div>
    
    </div>
    );
} 


export default Header;