import React, { useEffect, useState } from 'react'
import { HeadlineTitle } from '../components/HeadlineTitle'
import { SectionContent } from '../components/SectionContent'


const Contact = () => {

  const [info, setInfo] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();
  const [message2, setMessage2] = useState();

  useEffect(() => {
    fetch("http://localhost:5099/contactinformation", {
      method: "GET",
      headers: {
        "content-type": "application/json; charset=utf-8",
      },
    })
      .then((response) => response.json())
      .then((json) => setInfo(json));
  }, []);
  

  return (
    <div id='contact' className='contact'>
			<HeadlineTitle>Kontakt</HeadlineTitle>
			<SectionContent>
				<div className="contactWrapper">
					<div className="info">
						{
							info &&
							<>
								<h3>Kontakt information</h3>
								<p>{ info.company }</p>
								<p>{ info.address }</p>
								<p>{ info.zipcity }</p>
								<p>{ info.country }</p>
								<p>&#9743; { info.phone }</p>
								<p>&#9993; { info.email }</p>
								<p>CVR: { info.cvr }</p>
								<p>Åbnings tider: { info.openinghours }</p>
							</>
						}
					</div>
					<form>
						<h3>Skriv til os</h3>
						{
							message && message
						}
						<input type="text" name="name" id="name" placeholder='Navn' required />
						<input type="text" name="company" id="company" placeholder='Firma/organisation' required />
						<input type="email" name="email" id="email" pattern='/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/' placeholder='Email Adresse' required />
						<input type="tel" name="phone" id="phone" pattern="[0-9]{2})[- ]?([0-9]{2})[- ]?([0-9]{2})[- ]?([0-9]{2}" placeholder='Telefon' required  />
						<textarea name="message" id="message" placeholder='Besked' required ></textarea>
						<input type="submit" name="submit" id="submit" value="Send" />
					</form>
				</div>
			</SectionContent>
		</div>
	)
}

export default Contact