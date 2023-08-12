import React, { useState } from 'react';
import './Register.css';
import axios from 'axios';
function Register() {
  // const axios = require('axios/dist/browser/axios.cjs'); // browser
  const INITIAL_STATE = {
    firstName: '',
    lastName: '',
    email: '',
  };
  const [formData, setFormData] = useState(INITIAL_STATE);
  const updateInputs = (e) => {
    let { name, value } = e.target;
    setFormData((data) => ({ ...data, [name]: value }));
    console.log(formData);
  };
  const updateForm = (e) => {
    e.preventDefault();
    let jsonData = axios({
      method: 'post',
      url: '/drivers',
      data: formData,
    });
    console.log(formData)
    // setFormData(INITIAL_STATE);
  };

  return (
    <div className="reg">
      <form onSubmit={updateForm} name="frmMain" id="frmMain">
        <div className="container">
          <div className="row  m-1">
            <h3>Please fill out all fields</h3>
            <br></br>
          </div>
          <div className="row m-1">
            <div className="col col-2 text-end mt-2"></div>
            <div className="col col-8 text-start">
              First Name :
              <input
                type="text"
                className="form-control"
                id="firstName"
                name="firstName"
                onChange={updateInputs}
              />
            </div>
          </div>
          <div className="row  m-1">
            <div className="col col-2 text-end mt-2"></div>
            <div className="col col-8 text-start">
              Last Name :
              <input
                type="text"
                className="form-control"
                id="lastName"
                name="lastName"
                onChange={updateInputs}
              />
            </div>
          </div>
          <div className="row  m-1">
            <div className="col col-2 text-end mt-2"></div>
            <div className="col col-8 text-start">
              Email address :
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="name@example.com"
                name="email"
                onChange={updateInputs}
              />
            </div>
          </div>
          <div className="row  m-1">
            <div className="col col-2 text-end mt-2"></div>
            <div className="col col-8 text-start">
              Phone number :
              <input
                type="text"
                className="form-control"
                id="phone"
                name="phone"
                onChange={updateInputs}
              />
            </div>
          </div>
          <div className="row  m-1">
            <div className="col col-2 text-end mt-2"></div>
            <div className="col col-8 text-start">
              Address :
              <input
                type="text"
                className="form-control"
                id="address"
                name="address"
                onChange={updateInputs}
              />
            </div>
          </div>
          <div className="row  m-1">
            <div className="col col-2 text-end mt-2"></div>
            <div className="col col-8 text-start">
              City :
              <input
                type="text"
                className="form-control"
                id="city"
                name="city"
                onChange={updateInputs}
              />
            </div>
          </div>
          <div className='row m-1'>
            <div className="col col-2 text-end mt-2"></div>
            <div className="col col-8 text-start">
              State :
              <select class="form-select" aria-label="Default select example">
                <option value="0">Please Select State</option>
                <option value="AL">Alabama</option>
                <option value="AK">Alaska</option>
                <option value="AZ">Arizona</option>
                <option value="AR">Arkansas</option>
                <option value="CA">California</option>
                <option value="CO">Colorado</option>
                <option value="CT">Connecticut</option>
                <option value="DE">Delaware</option>
                <option value="DC">District Of Columbia</option>
                <option value="FL">Florida</option>
                <option value="GA">Georgia</option>
                <option value="HI">Hawaii</option>
                <option value="ID">Idaho</option>
                <option value="IL">Illinois</option>
                <option value="IN">Indiana</option>
                <option value="IA">Iowa</option>
                <option value="KS">Kansas</option>
                <option value="KY">Kentucky</option>
                <option value="LA">Louisiana</option>
                <option value="ME">Maine</option>
                <option value="MD">Maryland</option>
                <option value="MA">Massachusetts</option>
                <option value="MI">Michigan</option>
                <option value="MN">Minnesota</option>
                <option value="MS">Mississippi</option>
                <option value="MO">Missouri</option>
                <option value="MT">Montana</option>
                <option value="NE">Nebraska</option>
                <option value="NV">Nevada</option>
                <option value="NH">New Hampshire</option>
                <option value="NJ">New Jersey</option>
                <option value="NM">New Mexico</option>
                <option value="NY">New York</option>
                <option value="NC">North Carolina</option>
                <option value="ND">North Dakota</option>
                <option value="OH">Ohio</option>
                <option value="OK">Oklahoma</option>
                <option value="OR">Oregon</option>
                <option value="PA">Pennsylvania</option>
                <option value="RI">Rhode Island</option>
                <option value="SC">South Carolina</option>
                <option value="SD">South Dakota</option>
                <option value="TN">Tennessee</option>
                <option value="TX">Texas</option>
                <option value="UT">Utah</option>
                <option value="VT">Vermont</option>
                <option value="VA">Virginia</option>
                <option value="WA">Washington</option>
                <option value="WV">West Virginia</option>
                <option value="WI">Wisconsin</option>
                <option value="WY">Wyoming</option>
              </select>
            </div>
          </div>
          <div className="row  m-1">
            <div className="col col-2 text-end mt-2"></div>
            <div className="col col-8 text-start">
              MC# / DOT # :
              <input
                type="text"
                className="form-control"
                id="mcDot"
                name="mcDot"
                onChange={updateInputs}
              />
            </div>
          </div>
          <div className="row  m-1">
            <div className="col col-2 text-end mt-2"></div>
            <div className="col col-8 text-start">
              EIN / SSN :
              <input
                type="text"
                className="form-control"
                id="einSsn"
                name="einSsn"
                onChange={updateInputs}
              />
            </div>
          </div>
          <div className="row  m-1">
            <div className="col col-2 text-end mt-2"></div>
            <div className="col col-8 text-start">
              Insurance Company :
              <input
                type="text"
                className="form-control"
                id="insuranceCompany"
                name="insuranceCompany"
                onChange={updateInputs}
              />
            </div>
          </div>
          <div className="row  m-1">
            <div className="col col-2 text-end mt-2">

            </div>
            <div className="col col-8 text-start">
              Insurance Company phone number :
              <input
                type="text"
                className="form-control"
                id="insuranceCompanyPhone"
                name="insuranceCompanyPhone"
                onChange={updateInputs}
              />
            </div>
          </div>
          <div className="row  m-1">
            <div className="col col-2 text-end mt-2"></div>
            <div className="col col-8 text-start">
              Policy number :
              <input
                type="text"
                className="form-control"
                id="policyNumber"
                name="policyNumber"
                onChange={updateInputs}
              />
            </div>
          </div>
          <div className="row  m-1">
            <div className="col col-2 text-end mt-2">

            </div>
            <div className="col col-8 text-start">
              Factoring Company Name :
              <input
                type="text"
                className="form-control"
                id="factoringCompany"
                name="factoringCompany"
                onChange={updateInputs}
              />
            </div>
          </div>
          <div className="row  m-1">
            <div className="col col-2 text-end mt-2">

            </div>
            <div className="col col-8 text-start">
              Factoring Company phone number :
              <input
                type="text"
                className="form-control"
                id="factoringCompanyPhone"
                name="factoringCompanyPhone"
                onChange={updateInputs}
              />
            </div>
          </div>
          <div className="row  m-1">
            <div className="col col-2 text-end mt-2"></div>
            <div className="col col-8 text-start">
              Type of equipment:
              <select
                className="form-select"
                aria-label="Default select example"
                name="equiptmentType"
                onChange={updateInputs}
              >
                <option value='dryVan'>Dry Van</option>
                <option value='refrigerated'>Refrigerated</option>
                <option value='flatbed'>Flatbed</option>
                <option value='stepDeck'>Step Deck</option>
                <option value='other'>Other</option>
              </select>
            </div>
          </div>
          <div className="row m-3">
            <div className="col col-12">
              <button
                type="button"
                className="btn btn-danger"
                onClick={updateForm}
              >
                Submit Registration
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Register;
