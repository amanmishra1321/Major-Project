import React from "react";
import HeartImage from "../Static/HeartImage.jpg";
import "../Css/Home.css";
import {Link} from "react-router-dom";

const Home = () => {
    return(<>
    <nav className="navbar navbar-expand-lg navbar-light bg-transparent position-absolute" style={{zIndex:"10",top:"20px",width:"100%"}}>
  <div className="container-fluid">
    <a className="navbar-brand text-light" style={{marginLeft:"20px"}} href="#">Musify</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <a className="nav-link active text-light" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href="!#">Support</a>
        </li>
        <li className="nav-item">
          {/* <a className="nav-link text-light" href=>Login</a> */}
            <Link to="/login" className="nav-link text-light" >Login</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href="#">Sign Up</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

<img src={HeartImage} className="img-fluid " alt="Not Found" />
<p className="positioning text-light" style={{top:"40%"}}>Music is Life</p>
<p className="positioning text-light" style={{top:"50%"}}>That's Why Our Hearts have beats</p>
    </>);
}
export default Home;