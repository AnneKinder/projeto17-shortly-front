import { BrowserRouter, Routes, Route } from "react-router-dom";


import GlobalStyle from "./assets/styles/GlobalStyle.js";
import HomePage from "./pages/HomePage/index.js";
import LandingPage from "./pages/LandingPage/index.js";
import SignIn from "./pages/SignIn/index.js";
import SignUp from "./pages/SignUp/index.js";

function App() {
  return (
    <>
    <GlobalStyle />
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/home" element={<HomePage />} />
        {/* <Route path="/users/me" element={<LandingPage />} /> */}

      </Routes>
        
    </BrowserRouter>
   
    </>
   
  );
}

export default App;
