import Logo from "./components/Logo/Logo";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

import "./App.css";
function App() {
  return (
    <div className="App">
      <Logo />
      <Main />
      <div className="wrapper"></div>
      <Footer />
    </div>
  );
}

export default App;
