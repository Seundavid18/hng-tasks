import { Routes, Route } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.min.js";
import Footer from './components/Footer/Footer';
import Contact from './page/contact/Contact';
import Profile from './page/profile/Profile';

function App() {
  return (
    <>
    <Routes>
      <Route>
        <Route path="/" element={<Profile />}/>
        <Route path="/contact" element={<Contact />}/>
      </Route>
    </Routes>
    <Footer />
    </>
  );
}

export default App;
