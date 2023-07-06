import React, { useState } from "react";
import { StarHalf,StarFill } from 'react-bootstrap-icons';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import 'bootstrap/dist/css/bootstrap.css';
//import Navbar from "rec"
// import "bootstrap/dist/css/bootstrap.css";
import logo from "../Asserts/logo.png";
import user from "../Asserts/user.jpg"
import "../App.css";
import Modal from "react-bootstrap/Modal";
import userIcon from "../Asserts/user.jpg";
// import user1 from "../Asserts/user1.jpg";
// import user2 from "../Asserts/user.jpg";

export const User = () => {
  const [showProfileDialog, setShowProfileDialog] = useState(false);
  const handleProfileClick = () => {
    setShowProfileDialog(true);
  };

  const handleCloseProfileDialog = () => {
    setShowProfileDialog(false);
  };

  return (
    <div className="body">
      <div className="nav">
        <Navbar expand="lg" className="nav">
          <Container>
            <Navbar.Brand href="#home">
              <img src={logo} alt="" className="imglogo" />
              <span className="heading">HireStrom</span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link
                  href="#home"
                  className="headcontent"
                  onClick={handleProfileClick}
                >
                  Profile
                </Nav.Link>
                <Nav.Link href="#link" className="headcontent">
                  Edit Profile
                </Nav.Link>
                <Nav.Link href="#home" className="headcontent">
                  Apply Jobs
                </Nav.Link>
                <Nav.Link href="#link" className="headcontent">
                  View Applied Jobs
                </Nav.Link>
                <Nav.Link href="#home" className="headcontent">
                  Withdraw Applied Jobs
                </Nav.Link>
                <Nav.Link href="#home" className="headcontent">
                  Logout
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Modal show={showProfileDialog} onHide={handleCloseProfileDialog}>
          <Modal.Header closeButton>
            <Modal.Title>User Profile</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img src={user} alt="User Icon" className="user" />
            <br />
            <br />
            {/* Render the user's details here */}
            <p>Name: John Doe</p>
            <p>Graduation: XYZ University</p>
            <p>Skillset: HTML, CSS, JavaScript</p>
            <p>Job Type Preferred: Full-time</p>
            <p>Location: New York</p>
            <p>Shifts: Morning</p>
          </Modal.Body>
        </Modal>
      </div>
      <section className="mainlogo-container">
        <img src={logo} alt="" className="mainlogo" />
        <h5 className="maincontent">
          Where talent finds its perfect match. Your dream job awaits!!!
        </h5>
        <p className="mainpara">
          Thousands of small businesses use Hirestorm to turn their ideas into
          reality. Find Jobs. Create Trackable Resumes and Enrich your
          Application.
        </p>
      </section>
      <section className="card">
        <div className="row text-center d-flex align-items-stretch">
          <div className="col-md-4 mb-5 mb-md-0 d-flex align-items-stretch">
            <div className="card testimonial-card">
              <div
                className="card-up"
                style={{ backgroundColor: "#663726" }}
              ></div>
              <div className="avatar mx-auto bg-white">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
                  className="rounded-circle img-fluid"
                  alt="Avatar"
                />
              </div>
              <div className="card-body">
                <h4 className="mb-4">Rosie Angel</h4>
                <i className="fas fa-quote-left pe-2">
                  <StarFill color="darkorange" size={15} />
                  <StarFill color="darkorange" size={15} />
                  <StarFill color="darkorange" size={15} />
                  <StarFill color="darkorange" size={15} />
                  <StarFill color="darkorange" size={15} />
                  <br/>
                  </i>
                <hr />
                <p className="dark-grey-text mt-4">
                  <i className="fas fa-quote-left pe-2"></i>
                  HIRESTORM is a Great Platform for your Job Search. Without a Second doubt,GO FOR IT:).
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-5 mb-md-0 d-flex align-items-stretch">
            <div className="card testimonial-card">
              <div
                className="card-up"
                style={{ backgroundColor: "#663726" }}
              ></div>
              <div className="avatar mx-auto bg-white">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp"
                  className="rounded-circle img-fluid"
                  alt="Avatar"
                />
              </div>
              <div className="card-body">
                <h4 className="mb-4">Andrena Paul</h4>
                <i className="fas fa-quote-left pe-2">
                  <StarFill color="darkorange" size={15} />
                  <StarFill color="darkorange" size={15} />
                  <StarFill color="darkorange" size={15} />
                  <StarHalf color="darkorange" size={15} />
                  <br/>
                  </i>
                <hr />
                <p className="dark-grey-text mt-4">
                  <i className="fas fa-quote-left pe-2"></i>
                  HIRESTORM is a Great Platform for your Job Search. Without a Second doubt,GO FOR IT:)
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-0 d-flex align-items-stretch">
            <div className="card testimonial-card">
              <div
                className="card-up"
                style={{ backgroundColor: "#663726" }}
              ></div>
              <div className="avatar mx-auto bg-white">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp"
                  className="rounded-circle img-fluid"
                  alt="Avatar"
                />
              </div>
              <div className="card-body">
                <h4 className="mb-4">Smith Shaj</h4>
                <i className="fas fa-quote-left pe-2">
                  <StarFill color="darkorange" size={15} />
                  <StarFill color="darkorange" size={15} />
                  <StarFill color="darkorange" size={15} />
                  <StarHalf color="darkorange" size={15} />
                  <br/>
                  </i>
                <hr />
                <p className="dark-grey-text mt-4">
                  HIRESTORM is a Great Platform for your Job Search. Without a Second doubt,GO FOR IT:)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
     <div className="footer">
      <div className="fcontent">
      <p>Address  :  34,Abc Street, Kolkata</p>
      <p className="heading">HireStorm</p>
      <div className="link">
       <a href="#"><span>Legal Stuff   -  </span></a>
        <a href="#"><span>Privacy Policy   -  </span></a>
        <a href="#"><span>Terms and Conditions   -  </span></a>
      </div>
      </div>
     </div>
    </div>
    
  );
};

export default User;
