import './App.css'
import { Header } from './components/Header'
import { Projects } from './components/Projects'
import { Experience } from './components/Writing'
import { Research } from './components/Research'
import { About } from './components/About'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="app">
      <Header />
      <Projects />
      <Experience />
      <Research />
      <About />
      <Footer />
    </div>
  );
}

export default App

