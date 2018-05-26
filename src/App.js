import './styles/css/index.css';

import { Calendar, CalendarApp } from './components/calendar';
import {
  CalendarContainer,
  Courses,
  Home,
  Schedule,
  Sessions,
  Support
} from './pages';
import { Link, Route, BrowserRouter as Router } from 'react-router-dom';
import React, { Component } from 'react';

import { Header } from './containers/header';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
          <Route exact path="/" component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/schedule" component={Schedule} />
          <Route path="/courses" component={Courses} />
          <Route path="/sessions" component={Sessions} />
          <Route path="/support" component={Support} />
          <Route path="/calendar" component={CalendarContainer} />
        </div>
      </div>
    );
  }
}
