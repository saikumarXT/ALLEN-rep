import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet,
  Navigate,
} from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/neet" />} />
            <Route path="/neet" element={<Layouts />}>
              <Route index element={<Middle />} />
              <Route path="JEE" element={<JEE />} />
              <Route path="blogs" element={<Blogs />} />
              <Route path="contact" element={<Contact />} />
              <Route path="*" element={<NoPage />} /> //error page
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

function Layouts() {
  return (
    <div className="main">
      <div className="header">
        <Header />
      </div>

      <div className="outlet">
        <Outlet />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

function Header() {
  const navigate = useNavigate();

  function Class10() {
    navigate("blogs");
    return;
  }

  function Class11() {
    navigate("contact");
    return;
  }

  function Class12() {
    navigate("JEE");
    return;
  }

  return (
    <>
      <div className="header-main">
        <div className="header-left">
          <img class="allen-logo" src="public/allen.png" />
        </div>

        <div className="header-middle">
          <div className="option">courses</div>

          <div className="option">Test series</div>
          <div className="option">Class Room</div>
          <div className="option">Results</div>
          <div className="option">Study Materials</div>
          <div className="option">Scholarship</div>
          <div className="option">ALLEN E-store</div>
          <div className="option">More</div>
        </div>
        <div className="header-right">
          <div>
            <img className="phone-icon" src="phone.png"></img>
          </div>
          <div>
            <button className="login-button">Login</button>
          </div>
        </div>
      </div>
      <div className="blue-bar">
        <div className="p1-bar">IS YOUR CHILD IN CLASS 5–10?</div>
        <div className="p2-bar">
          {" "}
          ✨ &nbsp; Give them an early start to success—register for TALLENTEX
          now{" "}
        </div>
      </div>
    </>
  );
}

function Middle() {
  return (
    <>
      <div className="middle-main">
        <div class="div-poster1">
          <img className="poster1" src="public/posterr1.png"></img>
        </div>
        <div className="types-courses">
          <span className="p-courses">Pick the right course for you</span>
          <div className="courses-gird">
            <div className="neet-course">
              <div>
                <p className="courses-heading">NEET Courses</p>
                <p className="courses-view">View Course ></p>
              </div>
              <div class="course-image">
                <img className="course-logo" src="public/neet11.png" />
              </div>
            </div>

            <div className="jee-course">
              <div>
                <p className="courses-heading">JEE-Mains</p>
                <p className="courses-view">View Course ></p>
              </div>
              <div class="course-image">
                <img className="course-logo" src="public/jee.png" />
              </div>
            </div>

            <div className="classes-course">
              <div>
                <p className="courses-heading">class 6-10</p>
                <p className="courses-view">View Course ></p>
              </div>
              <div class="course-image-classes">
                <img className="course-logo" src="public/class.png" />
              </div>
            </div>
          </div>
        </div>
        <div className="trending-classes">
          <div className="title-button">
            <p className="para-title">Trending Courses</p>
            <div>
              <button className="buttonclass1">NEET</button>
              <button className="buttonclass2">JEE</button>
              <button className="buttonclass3">Class 6-10</button>
            </div>
          </div>
        </div>
        <div className="live-record">
          <div className="card1">
          <div className="one">record and scholarship</div>
          <div className="two">JEE Enthusiast Self Study Plus Course: Target 2026</div>
          <div className="three">lates recordings covers all syllbus</div>
          <div className="four">16,999</div>
          </div>
          <div className="card2">
          <div className="one">record and scholarship</div>
          <div className="two">JEE Enthusiast Self Study Plus Course: Target 2026</div>
          <div className="three">lates recordings covers all syllbus</div>
          <div className="four">16,999</div>
          </div>
        </div>
      </div>
    </>
  );
}

function Footer() {
  return (
    <>
      <div>
        <div>d</div>
        <div>d</div>
        <div>d</div>
      </div>
    </>
  );
}

function JEE() {
  return <>this is JEE Page</>;
}

function Blogs() {
  return <div>blogs page</div>;
}

function Contact() {
  return <div>here is the contacts page</div>;
}

function NoPage() {
  return <div>sorry page not found</div>;
}

export default App;

/*
{/* Redirect root `/` to `/neet/home` */
//  <Route path="/" element={<Navigate to="/neet/home" />} />
