import React from "react";
import Navbar from "./Component/Navbar";
import Home from "./Component/Home";
import Users from "./Component/Users";
import Error from "./Component/Error";
import ErrorBoundary from "./Component/ErrorBoundary";
import { Route, Routes } from "react-router-dom";
import Nest from "./Component/Nest";
import First from "./Component/First";
import Second from "./Component/Second";

function App() {
  return (
    <>
      <ErrorBoundary>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/nest" element={<Nest />}>
            <Route path="first" element={<First />} />
            <Route path="second" element={<Second />} />
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </ErrorBoundary>
    </>
  );
}

export default App;
