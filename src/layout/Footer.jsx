import React, { useState, useEffect } from 'react'
import parser from 'html-react-parser'


const Footer = () => {

	const [ footer, setFooter ] = useState()
  
	useEffect( () => {
		fetch( "http://localhost:5099/footer", {
		  method: "GET",
		  headers: {
			"content-type": "application/json; charset=utf-8",
		  },
		} )
		  .then( ( response ) => response.json() )
		  .then( ( json ) => setFooter( json ) );
	  }, [] );


	return (
		<footer>
			{
				footer &&
				<p>&copy; { parser(footer.footertext)  }</p>
			}
		</footer>
	)
}

export default Footer