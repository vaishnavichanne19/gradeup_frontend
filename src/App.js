import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Home Components/Navbar';
import HomePages from './Home Components/HomePages';
import Footer from './Home Components/Footer';
import Service from './pages/Service';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Test from './pages/Test';
import ClassesPage from './pages/ClassesPage';
import ExamsPage from './pages/ExamsPage';
import BlogDetail from './pages/BlogDetail';
import 'aos/dist/aos.css'; 
import AOS from 'aos';
import { HelmetProvider } from 'react-helmet-async';

AOS.init();

function App() {
  return (
    <div>
    <HelmetProvider>
    <Router>
    <Navbar/>
    <Routes>
      <Route exact path='/' element={<HomePages/>}/>
      <Route path='/service' element={<Service/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/blog' element={<Blog/>}/>
      <Route path='/blog-detail/:id' element={<BlogDetail/>}/>
      <Route path='/test' element={<Test/>}/>
      <Route path='/class/:classId' element={<ClassesPage/>}/>
      <Route path='/entrance-exam/:entranceexamId' element={<ExamsPage/>}/>
    </Routes>
    <Footer/>
  </Router>
  </HelmetProvider>
  </div>
  );
}

export default App;
