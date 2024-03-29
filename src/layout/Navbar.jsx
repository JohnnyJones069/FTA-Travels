import React from 'react'
import Logo from '../assets/logo/logo.png'
import { Link } from 'react-router-dom'
import './scss/Navbar.scss'


const Navbar = () => {


		// var navbar = document.getElementById( "nav" );
		// var sticky = navbar.offsetTop;

		// function stickyFunction () {
		// 	if ( window.pageYOffset >= sticky ) {
		// 		navbar.classList.add( "sticky" )
		// 	} else {
		// 		navbar.classList.remove( "sticky" );
		// 	}
		// }






	const toggleNav = ( e ) => {
		e.target.classList.toggle( 'change' )
		var x = document.getElementById( "myLinks" );
		if ( x.style.display === "block" ) {
			x.style.display = "none";
		} else {
			x.style.display = "block";
		}
	}



	return (
		<div>
			<nav id='nav'>
				<div className="navbar">
					<div className="navLogo">
						<a href="#top">
							<img src={ Logo } alt="Logo" />
						</a>
					</div>
					<div className="navLinks">
						<a href="#about">Om os</a>
						<a href="#trips">Produkter</a>
						<a href="#contact">Kontakt</a>
					</div>

					<div className="mobileNavIcon" onClick={ toggleNav }>
						<div className="bar1"></div>
						<div className="bar2"></div>
						<div className="bar3"></div>
					</div>

					<div className="searchBox">
						<input type="text" placeholder='Søg' />
						<input type="submit" value="Søg" />
					</div>
				</div>
				<div className="mobileNav">
					<div id="myLinks">
						<a href="#about">Om os</a>
						<a href="#tours">Produkter</a>
						<a href="#contact">Kontakt</a>
					</div>
				</div>
			</nav>
		</div>
	)
}

export default Navbar;