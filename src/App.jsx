import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route , Link, Outlet ,Navigate} from "react-router-dom";
import {useState} from 'react';
import { useNavigate } from "react-router-dom";
import './App.css';
 
function App() {

  return ( <>
  <div>
    <BrowserRouter>
	    <Routes>
        <Route path='/' element={<Navigate to='/neet'/>}/>
        <Route path='/neet' element={<Layouts/>}>
            <Route index element={<Home/>}/>
            <Route path='JEE' element={<JEE/>} />
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

function Layouts(){
  return <div className='main'>
    
    <div className='header'>
        <Header/> 
     </div>

      <div className='outlet'>
        <Outlet/>
      </div>
      <div className='footer'>
        <Footer/>
      </div>
  </div>
}

function Header(){
  const navigate=useNavigate();

function Class10(){
  navigate("blogs");
  return
}

function Class11(){

  navigate("contact");
  return
}

function Class12(){

  navigate("JEE");
  return
}


   return(
      <>
      <div className='header-main'> 
        <div className='header-left'>
          <img class='allen-logo' src="public/allen.png"/>
        </div>

      <div className='header-middle'>
        <div className='option'>
          courses
          </div>

            <div className='option'>Test series</div>
            <div className='option'>Class Room</div>
            <div className='option'>Results</div>
            <div className='option'>Study Materials</div>
            <div className='option'>Scholarship</div>
            <div className='option'>ALLEN E-store</div>
            <div className='option'>More</div>
          </div>
            <div className='header-right'>
              <div><img className='phone-icon'src='phone.png'></img></div>
               <div><button className='login-button'>Login</button></div>
            </div>
      </div>
      <div className='blue-bar'>
       <div className="p1-bar">IS YOUR CHILD IN CLASS 5–10?</div> 
        <div className="p2-bar"> ✨ &nbsp; Give them an early start to success—register for TALLENTEX now!&nbsp;&nbsp;&nbsp;&nbsp;></div>
      </div>
      </>
)}

function Home(){
    return(<>
  <div className="home-container">
      <header className="hero">
        <h1>Welcome to My Website</h1>
        <p>Your one-stop solution for learning and projects 🚀</p>
        <button className="cta-btn">Get Started</button>
      </header>

      <section className="features">
        <div className="feature-card">
          <h3>📚 Learn</h3>
          <p>Access high-quality tutorials and guides to boost your skills.</p>
        </div>
        <div className="feature-card">
          <h3>💻 Build</h3>
          <p>Work on exciting real-world projects and improve your portfolio.</p>
        </div>
        <div className="feature-card">
          <h3>🤝 Connect</h3>
          <p>Join our community and connect with like-minded learners.</p>
        </div>
      </section>
    </div>
      </>)
}

function Footer(){
    return<>
      <div>
        <div>d</div>
        <div>d</div>
        <div>d</div>
      </div>
    </>
}

function JEE(){
    return<>
    this is JEE Page
    </>
}

function Blogs(){
  return <div>
    blogs page
  </div>
}

function Contact(){
  return <div>
  here is the contacts page
  </div>
}

function NoPage(){
  return <div>
     sorry page not found 
  </div>
}


export default App

/*
{/* Redirect root `/` to `/neet/home` */
  //  <Route path="/" element={<Navigate to="/neet/home" />} />
