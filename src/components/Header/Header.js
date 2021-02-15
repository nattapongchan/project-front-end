import React, { useState } from 'react';
import { Link } from 'react-scroll';

function Header(props) {
    const [active, setActive] = useState("")

    function handleNavbar(value) {
        setActive(value);
    }

    return (
        <>
            {/* <!-- Navigation--> */}
            <nav className={props.visible ? "navbar navbar-expand-lg navbar-light fixed-top" : "navbar navbar-expand-lg navbar-light fixed-top navbar-shrink"} id="mainNav">
                <div className="container">
                    <Link to="page-top" smooth={true} duration={500} className="navbar-brand js-scroll-trigger" href="#page-top">Travel & Tours</Link>
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        Menu
                        <i className="fas fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item"><Link onClick={() => handleNavbar("tours")} to="tours" smooth={true} duration={500} className={active === "tours" ? "nav-link js-scroll-trigger active" : "nav-link js-scroll-trigger"} href="#tours">Tours</Link></li>
                            <li className="nav-item"><Link onClick={() => handleNavbar("hotels")} to="hotels" smooth={true} duration={500} className={active === "hotels" ? "nav-link js-scroll-trigger active" : "nav-link js-scroll-trigger"} href="#hotels">Hotels</Link></li>
                            <li className="nav-item"><Link onClick={() => handleNavbar("about")} to="about" smooth={true} duration={500} className={active === "about" ? "nav-link js-scroll-trigger active" : "nav-link js-scroll-trigger"} href="#about">About</Link></li>
                            <li className="nav-item"><Link onClick={() => handleNavbar("signup")} to="signup" smooth={true} duration={500} className={active === "signup" ? "nav-link js-scroll-trigger active" : "nav-link js-scroll-trigger"} href="#signup">Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
            {/* <!-- Masthead--> */}
            <header className="masthead" id="page-top">
                <div className="container d-flex h-80 align-items-center">
                    <div className="mx-auto text-center">
                        <h1 className="mx-auto my-0 text-uppercase">Travel & Tours</h1>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
