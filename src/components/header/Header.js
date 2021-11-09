import React from 'react';
// import components
import NavBar from '../navbar/NavBar';
import Banner from '../banners/Banner';



function Header () {
    return(
        <div className="header">
        <div className="container">
            <NavBar />
            <Banner />
        </div>
    </div>
    );
}
export default Header;