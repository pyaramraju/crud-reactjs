import React, { useState } from "react";
import axios from "axios";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";


const Signup = () => {
    const [data, setData] = useState({
        username: "",
        password: "",
        email: "",
        mobile: "",
      });
      const { Email, Username, Password, Mobile } = data;
      const changeHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
      };
      const submitHandler = async (e) => {
        e.preventDefault();
        console.log(data);
        var result = await axios.post("https://localhost:3000", data);
        console.log(result);
      }
    return (
        <div className="container">
        <div className="row mt-3">
          <div className="col-2 justify-content-center">
            <a href="https://linkedin.com" target="_blank">
              <BsLinkedin />
            </a>
            <br />
            <a href="https://github.com" target="_blank">
              <FaGithub />
            </a>
            <br />
            <a href="https://dribbble.com" target="_blank">
              <FaDribbble />
            </a><br />
            <a href="https://facebook.com" target="_blank">
              <FaFacebookF />
            </a>
            <br />
          </div>
          
          <div className="col-10">
          <div className="card mb-3 shadow">
           <div className="row g-0">
            <div className="col-md-3 img-div">
              <img
                src="malechimp.png"
                className="card-img-left"
                alt="public/malechimp.png"
                height="160px"
                width="160px"
                
                
              />
            </div>
            <div className="col-md-9">
            <div className="card-body">
                <h5 className="card-title">Get started with a free account</h5>
                <p>
                  Create a free malechimp Account to send beautiful emails to
                  customers,contributors,
                  <br />
                  and fans,Already have a mailchimp Account?
                  <Link to="/login" name="login" className="alert-link">Login here</Link>
                </p>
              </div>
            
            <form onSubmit={submitHandler}>
              <div className="row mb-3">
              <div className="col-md-8">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  value={Username}
                  className="form-control"
                  onChange={changeHandler}
                />
              </div>
              <br />
              <div className="col-md-8">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                  Password
                </label>
                <input
                  type="text"
                  name="password"
                  value={Password}
                  className="form-control"
                  onChange={changeHandler}
                />
              </div>
              <div className="col-md-8">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  value={Email}
                  className="form-control"
                  onChange={changeHandler}
                />
              </div>
              <br />
              <div className="col-md-8">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                  Mobile
                </label>
                <input
                  type="text"
                  name="mobile"
                  value={Mobile}
                  className="form-control"
                  onChange={changeHandler}
                />
              </div>
              <br />
  </div>
  
              <div className="row mb-3">
                <div className="col-sm-6">
                  <div className="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                    />
                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                      one lowercase character
                    </label>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                    />
                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                      one special character
                    </label>
                  </div>
                </div>
  
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                      <label className="form-check-label" htmlFor="flexRadioDefault1">
                        one uppercase character
                      </label>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                      <label className="form-check-label" htmlFor="flexRadioDefault1">
                        8 characters minimum
                      </label>
                    </div>
                  </div>
                </div>
  
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                      <label className="form-check-label" htmlFor="flexRadioDefault1">
                        one number
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
              <div className="col-md-4">
                <button name="submit" type="submit" className="btn btn-primary">
                  Get started
                </button>
              </div>
              <div className="col-md-8">
                <p>
                  By clicking this button, you agree to mailchimp's
                  <br />
                  <a href="#" className="alert-link">
                    Anti Spam Policy & Terms of Use
                  </a>
                </p>
              </div>
              </div>
            </form>
            </div>
          </div>   
          </div>
          </div>
          </div>
        </div>
     
    );
}

export default Signup;
