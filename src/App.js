import './App.css';
import { Route, Routes } from "react-router-dom";
import HeaderDisplay from './components/header';
import AboutMe from './components/aboutMe';
import WorkSection from './components/workSection';
import Footer from './components/footer';

function App() {
  return (
    //input components
    <div>
      <HeaderDisplay />
      <Routes>
        <Route exact path='/Portfolio-LR' element={<AboutMe />} />
        <Route exact path='/work' element={<WorkSection />} />
      </Routes>
      <Footer />
    </div>

  );
}

export default App;
