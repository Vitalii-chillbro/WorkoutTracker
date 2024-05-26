import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import DayOne from "./components/DayOne";
import DayTwo from "./components/DayTwo";
import DayThree from "./components/DayThree";
import Navigation from "./pages/Navigation";

const Container = styled.div`
  padding: 2rem;
`;

const App: React.FC = () => {
  return (
    <Router>
      <Navigation />
      <Container>
        <Routes>
          <Route path="/day-one" element={<DayOne />} />
          <Route path="/day-two" element={<DayTwo />} />
          <Route path="/day-three" element={<DayThree />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
