
import { ThemeProvider } from "styled-components"
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import MainContent from "./Components/MainContent"
import Authentication from "./Components/Authentication"
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

const theme = {
  colors : {
    header: "#d1fffa",
    body :" yellow",
    footer : "#D3D3D3",
  },
  mobile:"768px"

}

function App() {
  return (
    <>
    <Router>
      
    <ThemeProvider theme = {theme}>
   <div>
    <Routes>
    <Route  path="/" element={<><Navbar/> <MainContent/></>}/>
    {/* <Route  path="" element={ }/> */}
    <Route  path="/Authentication" element={<Authentication/>}/>
    </Routes>
    </div>
    </ThemeProvider>
    <Footer/>
    </Router>
    </>
  );
}

export default App;
