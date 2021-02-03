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
import EditEntry from "./components/entries/EditEntry";
import EditDiary from "./components/diaries/EditDiary";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/diary/:id" component={DiaryDetails} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/create" component={CreateDiary} />
        <Route path="/diary/:id/create" component={CreateEntry} />
        <Route path="/diary/:id/edit" component={EditDiary} />
        <Route path="/diary/:id/:id/edit" component={EditEntry} />
        <Route path="/diary/:id/:id" component={EntryDetails} />
      </Switch>
      <div style={{ height: "150px" }}></div>

      <Footer />
    </Router>
  );
}

export default App;
