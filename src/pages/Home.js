import React, { Component } from 'react';
import {
  StudentCourseDescriptionContainer,
  StudentSessionsContainer
} from '../containers/courses';

import WelcomeTitle from '../containers/home/welcomeTitle';

// create Provider component
// const studentProvider = StudentProvider;

export class Home extends Component {
  render() {
    return (
      <main role="main" className="container">
        <WelcomeTitle />

        <StudentSessionsContainer id="a7sm0000000SDyyAAG" />
        <StudentCourseDescriptionContainer id="a7sm0000000SDyyAAG" />

      </main>
    );
  }
}

export default Home;
