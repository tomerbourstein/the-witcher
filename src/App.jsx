import Logo from "./components/Logo/Logo";
import Main from "./components/Main/Main";
import NonDesktop from "./components/NonDesktop";
import Footer from "./components/Footer/Footer";
import "./App.css";
function App() {
  return (
    <div className="App">
      <Logo />
      <Main />
      <NonDesktop />
      <div className="wrapper"></div>
      <Footer />
    </div>
  );
}

export default App;
