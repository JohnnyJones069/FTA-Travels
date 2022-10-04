import React, { useState, useEffect } from "react";
import { HeadlineTitle } from "../components/HeadlineTitle";
import { SectionContent } from "../components/SectionContent";
import { Modal } from "../components/Modal";
import Star from "../assets/red-star.png";
import parser from "html-react-parser";
import "./scss/Trips.scss";
import SliderWrapper, { SliderItem } from "../components/Slider";

const Trips = () => {
  const [ trips, setTrips ] = useState();
  const [ tripContent, setTripContent ] = useState();
  const [ loading, setLoading ] = useState();
  const [ err, setErr ] = useState();

  useEffect( () => {
    fetch( "http://localhost:5099/tours", {
      method: "GET",
      headers: {
        "content-type": "application/json; charset=utf-8",
      },
    } )
      .then( ( response ) => response.json() )
      .then( ( json ) => setTrips( json ) );
  }, [] );

  const rating = ( rating ) => {
    let star = "";
    for ( let i = 0; i < rating; i++ ) {
      star += `<img src=${ Star } alt="Red rating star" className="starImg" />`;
    }
    return star;
  };

  const dateOptions = { year: "numeric", month: "long", day: "numeric" };

  const handleModal = ( id ) => {
    document.querySelector( "#modal" ).classList.toggle( "active" );
    setTripContent( trips[ id ] );
  };

  return (
    <div id="trips" className="trips">
      <HeadlineTitle>Rejsemål</HeadlineTitle>
      <SectionContent>
        { trips &&
          <>
            <div className="tripWrapper">
              { trips.map( ( t, i ) => {
                return (
                  <div className="tourItem" key={ i }>
                    <img
                      src={ "http://localhost:5099/images/tours/" + t.coverimage }
                      alt={ t.title }
                    />
                    <div className="tripContent">
                      <h3 className="tripTitle">{ t.title }</h3>
                      { parser( rating( t.rating ) ) }
                      <p className="tripDate">{
                        new Date( t.traveldate ).toLocaleDateString( "da", { day: "numeric", month: "long", year: "numeric" } )
                      }
                      </p>
                      <p className="tripTeaser">{ parser( t.teaser ) }</p>
                      <button onClick={ () => handleModal( i ) }>Læs mere</button>
                    </div>
                  </div>
                );
              } ) }
            </div>
            <Modal>
              {
                tripContent &&
                <>
                  <div className="modalTitle">
                    <h3>{ tripContent.title }</h3>
                    <button className="close" onClick={ handleModal }>&#10005;</button>
                  </div>
                  <hr />
                  <div className="modalSlider">
                    <SliderWrapper children={tripContent.gallery}>
                      {
                        tripContent.gallery.map( ( img, i ) => {
                          return (
                            <>
                              <SliderItem children={img}>
                                <img src={ "http://localhost:5099/images/tours/" + img} alt="Trip Image" />
                              </SliderItem>
                            </>
                          )
                        } )
                      }
                    </SliderWrapper>
                  </div>
                  <div className="modalContent">
                    <h1>{ tripContent.title }</h1>
                    { parser( rating( tripContent.rating ) ) }
                    <h4>Du får:</h4>
                    { parser( tripContent.content.replace( "<p> *", "<p style='color: #a9a8a4;margin-left:30px;' *" ) ) }
                    <h4>Værelsestype</h4>
                    { parser( tripContent.roomtype ) }
                    <p className="tripDate">{ new Date( tripContent.traveldate ).toLocaleDateString( "da-DK", dateOptions ) }</p>
                  </div>
                  <hr />
                  <div className="modalBut">
                    <button onClick={ handleModal }>Close</button>
                  </div>
                </>
              }
            </Modal>
          </>
        }
        {
          loading && !trips &&
          <>Loading...</>
        }
        {
          err && <>Error!!!</>
        }
      </SectionContent>
    </div>
  );
};

export default Trips;
