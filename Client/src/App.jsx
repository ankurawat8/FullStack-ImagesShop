import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar";
import GsapTrasition from "./components/GsapTrasition";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <GsapTrasition />
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
