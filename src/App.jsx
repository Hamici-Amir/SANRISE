import FooterCom from "./components/Footer.jsx"
import Header from "./components/Header.jsx"
//import PrivateRoute from "./components/PrivateRoute.jsx"
import { CreatePost } from "./pages/CreatePost.jsx"
import { Dashboard } from "./pages/Dashboard.jsx"
import Home from "./pages/Home.jsx"
import SingIn from "./pages/SingIn.jsx"
import {BrowserRouter,Routes,Route, Navigate} from "react-router-dom"
import UpdatePost from "./pages/UpdatePost.jsx"
import About from "./pages/About.jsx"
import PostPage from "./pages/PostPage.jsx"
import Projects from "./pages/Projects.jsx"
import Search from "./pages/Search.jsx"
import { Header1 } from "./components/Header1.jsx"

function App() {
  const user = JSON.parse(localStorage.getItem("user"))
  
  return (
    <BrowserRouter>
    
       <Header />
          <Routes>
            <Route path="/sign-in" element={ !user ? <SingIn /> : <Navigate to="/" /> } />
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About />} />
            <Route path="/dashboard" element={ user ? <Dashboard /> : <Navigate to="/sign-in" />} />
            <Route path="/create-post" element={user ? <CreatePost /> : <Navigate to="/sign-in" /> }  /> 
            <Route path="/update-post/:postId" element={user ? <UpdatePost /> : <Navigate to="/sign-in" /> } />
           <Route path='/post/:postSlug' element={<PostPage />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/search" element={<Search />} />

           </Routes>

         <FooterCom />
    </BrowserRouter>
  )
}

export default App
/*
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAndMSGIX-09Pi7iqI8W66te6sznpicaCc",
  authDomain: "blog-app-84202.firebaseapp.com",
  projectId: "blog-app-84202",
  storageBucket: "blog-app-84202.appspot.com",
  messagingSenderId: "485399417556",
  appId: "1:485399417556:web:3e78145f0bfcf4a1796141"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);









*/