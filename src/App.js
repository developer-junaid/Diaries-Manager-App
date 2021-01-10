import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import Navbar from "./components/layout/Navbar";
import DiaryDetails from "./components/diaries/DiaryDetails";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/diary/:id" component={DiaryDetails} />
      </Switch>
    </Router>
  );
}

export default App;
