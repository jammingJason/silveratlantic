import React from 'react';
import logo from './images/logoShadow.png';
import marinesImage from './images/marines.jpg';
import './Home.css';

function Home() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col col-12"></div>
        </div>
        <div className="row">
          <div className="col col-12 truck mt-3 mb-2">
            <img
              src={logo}
              alt="SilverAtlantic Logo"
              className="truckFlagImage"
            />
          </div>
          <p>904.647.8356</p>
          <a href='mailto:info@silveratlanticfreight.com'><h6>info@<br />silveratlanticfreight.com</h6></a>
        </div>
        <div className="row">
          {/* <div className="col col-3" /> */}
          <div className="col col-12 text-center mr-2 ml-2">
            <hr />
            <blockquote className="bq">
              <h3>SilverAtlantic Freight Services LLC</h3>
              We will make you more money on your loads. That's what you want, right?
              <br />Our dispatchers are experienced in negotiating with brokers, that's what we do.
              <br />We have over 40 years of experience in trucking.
              <br />We'll book your first load at no charge. We want to show you what we can do to make you more money.
            </blockquote>
            <div className="text-center">
              {/* <button type="button" class="btn btn-danger">
                Register Online
              </button> */}
            </div>
            <hr />
          </div>
          {/* <div className="col col-3" /> */}
        </div>
        <div className='row'>
          <div
            className="col col-12 m-2 attributes text-center"
          >
            Our services include:<br />

            <i class="fa-solid fa-check " style={{ color: "red" }}></i>&nbsp;Booking your loads at the BEST rate<br />
            <i class="fa-solid fa-check" style={{ color: "red" }} ></i>&nbsp;Factoring Service<br />
            <i class="fa-solid fa-check" style={{ color: "red" }}></i>&nbsp;Fuel Discounts available<br />
            <i class="fa-solid fa-check" style={{ color: "red" }}></i>&nbsp;Full DOT Compliance Service<br />

          </div>
        </div>
        <div className='row'>
          <hr />
          <div className='col col-12'>
            <h2>Call us now: (904) 647-8356</h2>
            <h3>Veteran Owned</h3>
          </div>
        </div>
      </div >
    </>
  );
}

export default Home;
