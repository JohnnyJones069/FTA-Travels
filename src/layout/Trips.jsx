import React, {useState, useEffect} from 'react'
import {HeaderTitle, HeadlineTitle} from '../components/HeadlineTitle';
import {SectionContent} from '../components/SectionContent';
import {Modal} from '../components/Modal';
import Star from '../assets/red-star.png';
import parser from 'html-react-parser';
import './scss/Trips.scss'
import SliderWrapper, {SliderItem} from '../components/Slider'

const Trips = () => {
  const [trips, setTrips] = useState()
  const [tripContent, setTripContent] = useState()

  useEffect(() => {
    fetch("http://localhost:5099/tours", {
      method: "GET",
      headers: {
        "content-type": "application/json; charset=utf-8",
      }
    })
      .then(response => response.json())
      .then(json => setTrips(json));
  }, []);

  const rating = (rating) => {
    let star = '';
    for (let i = 0; i < rating; i++){
      star += '<img src=${ Star } alt="Red rating star" className="starImg" />'
    }
    return star
  }

  const dateOptions = {year: 'numeric', month: 'long', day: 'numeric'}

  const handleModal = (id) => {
    document.querySelector("#modal").classList.toggle("active")
    setTripContent(trips[id])
  }

  return (
    <div id='trips' className='trips'>
      <HeadlineTitle>Rejsemål</HeadlineTitle>
      <SectionContent>
      {trips == null ? <span>Loading...</span> : 
        trips.length == 0 ? <span>Ingen ture til rådighed</span> :
        trips.map((t, i) => {
          return(
            <div className="tourItem" key={i}>
              <img src={"http://localhost:5099/images/tours/" + t.coverimage} alt={t.title} />
              <div className="tourContent">
                <h3 className="tourTitle">{t.title}</h3>
                {parser(rating(t.rating))}
                <p className="tourDate">
                  
                </p>
              </div>
            </div>
          )
        })
      }
      </SectionContent>
    </div>
  )
}

export default Trips