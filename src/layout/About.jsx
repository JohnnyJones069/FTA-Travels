import {useState, useEffect} from "react";
import { HeadlineTitle } from "../components/HeadlineTitle";
import {SectionContent} from "../components/SectionContent";
import './scss/About.scss'
import parse from 'html-react-parser';


const About = () => {
  const [about, setAbout] = useState();

  useEffect(() => {
    fetch("http://localhost:5099/about", {
      method: "GET",
      headers: {
        "content-type": "application/json; charset=utf-8",
      }
    })
      .then(response => response.json())
      .then(json => setAbout(json));
  }, []);


  return (
    <div id="about" className="about">
      <HeadlineTitle>Om os</HeadlineTitle>
      <SectionContent>
        { 
          about &&
          <div className="aboutContent">
            {parse(about.content)}
            <div className="aboutImg">
              <img src={"http://localhost:5099/images/about/" + about.image} alt="About image" />
            </div>

          </div>
          
        }
      </SectionContent>
    </div>
  )
}

export default About