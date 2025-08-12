import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route , Link } from "react-router-dom";


    function App() {
  return (
    <BrowserRouter>
  <Link to='/'>home</Link>
      ||
     <Link to='/blogs'>blogs</Link>
      ||
      <Link to='/contact'>contact</Link>
      ||
      <Link to='/NoPage'>NoPage</Link>
      ||
	    <Routes>
        
        <Route pathe='/' element={<Home/>} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/nopage" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

function Home(){
  return <div>
    welcome to home
  </div>
}

  function Blogs(){
  return <div>
    blogs
  </div>
  }

  function Contact(){
  return <div>
  contacts 
  </div>
}
function NoPage(){
  return <div>
    no page
  </div>
}

export default App
