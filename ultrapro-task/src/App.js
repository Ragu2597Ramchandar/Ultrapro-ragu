import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeComponent from "./components/HomeComponent";


const App = () => {
  return(
    <React.Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<HomeComponent/>} />
        </Routes>
      </Router>
    </React.Fragment>
  )
};
export default App;