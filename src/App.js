import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "../src/components/navbar/Navbar";
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { AppProvider } from './components/Context';
import "./components/styles/main.css";

function App() {
  return (
    <div className="App">
      <AppProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Header />} />
          </Routes>
          <Footer />
        </Router>
      </AppProvider>
    </div>
  );
}

export default App;
