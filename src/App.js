import './App.css';
import HeaderDisplay from './components/header';
import Profilepic from './components/profilePic';
import AboutMe from './components/aboutMe';
import WorkSection from './components/workSection';
import Footer from './components/footer';

function App() {
  return (
    //input components
    <div>
      <HeaderDisplay />
      <Profilepic />
      <AboutMe />
      <WorkSection />
      <Footer />
    </div>

  );
}

export default App;
