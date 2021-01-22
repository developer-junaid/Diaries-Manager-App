import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import Navbar from "./components/layout/Navbar";
import DiaryDetails from "./components/diaries/DiaryDetails";
import EntryDetails from "./components/entries/EntryDetails";

import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import CreateDiary from "./components/diaries/CreateDiary";
import CreateEntry from "./components/entries/CreateEntry";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/diary/:id" component={DiaryDetails} />
        <Route path="/diary/:id/:id" component={EntryDetails} />

        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/create" component={CreateDiary} />
        <Route path="/diary/:id/create" component={CreateEntry} />
      </Switch>
    </Router>
  );
}

export default App;
