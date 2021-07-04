import React from "react";
import HomepageImage from "../Static/HomepageImage.jpg";
import ShantiSong from "../Static/Shanti.jpg";
import {Carousel} from '3d-react-carousal';

const Homepage = () => {

    let slides = [
        <img  src="https://picsum.photos/800/300/?random" alt="1" className="img-fluid"/>,
        <img  src="https://picsum.photos/800/301/?random" alt="2" className="img-fluid" />  ,
        <img  src="https://picsum.photos/800/302/?random" alt="3" className="img-fluid" />  ,
        <img  src="https://picsum.photos/800/303/?random" alt="4" className="img-fluid" />  ,
        <img src="https://picsum.photos/800/304/?random" alt="5" className="img-fluid" />   ];
    return (<>
    <div style={{backgroundImage:{ShantiSong}}}>
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand text-light" href="!#">Musify</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <a className="nav-link active text-light" aria-current="page" href="!#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href="!#">Features</a>
        </li>
        <li className="nav-item">
          <a className="nav-link  text-light " href="!#">Pricing</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
<Carousel slides={slides} autoplay={true} interval={10000}/>
</div>
    </>);
}

export default Homepage;