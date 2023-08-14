import "./App.css"
import "./global.css";
import { useState, createContext } from "react"
import Header from './components/Header';
import Hero from './components/Hero';
import Skill from './components/Skill';
import Profile from './components/Profile';
import Project from "./components/Project";
import Footer from './components/Footer';

export const ThemeContext = createContext(null)


function App() {
  const [theme, setTheme] = useState("light");

  const changeTheme = () => {
    setTheme((prevState) => (prevState === "light" ? "dark" : "light"));

  }

  return (
    <ThemeContext.Provider value={{ theme }}>
      <div className="App" id={theme}>
        <header className="App-header">
          <Header changeTheme={changeTheme} />
          <hr />
          <Hero />
          <hr />
          <Skill />
          <hr />
          <Profile />
          <hr />
          <Project />
          <hr />
          <Footer />
        </header>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
