import React, { Component } from 'react';

import { Messages } from '../../components';
import PropTypes from 'prop-types';
import StudentSessionCard from './student-session-card';

const API_FOR_STUDENT_SESSIONS = `${process.env.REACT_APP_RESTAPI_URL}:${
  process.env.REACT_APP_RESTAPI_PORT
  }/studentSessions`;

const getStudent = id => {
  console.log('API_FOR_STUDENT_SESSIONS: ', API_FOR_STUDENT_SESSIONS);
  return `${API_FOR_STUDENT_SESSIONS}/?Enrolment__r.Id=${id}`;
};

class StudentCourseContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      studentData: []
    };
  }

  componentDidMount() {
    console.log('URL: ', API_FOR_STUDENT_SESSIONS);
    fetch(getStudent(this.props.id))
      .then(data => data.json())
      .then(data => {
        console.log('data ; ', data);

        this.setState({
          studentData: data
        });
      })
      .catch(err => {
        console.error('Error: ', err);
      });
  }

  render() {
    
    let sessionDetails = this.state.studentData.map((sessionDetail, idx) => {
      if (idx < 3) {
        return (

          <StudentSessionCard
            key={idx}
            meta={sessionDetail}
            id={'card_' + idx}
          />

        );
      } else if (idx === 0) {
        return (
          <Messages
            title={'... message'}
            body={'Currently, you do not have any sessions booked'}
          />
        );
      }
    });

    return (
      <div className="album">
        <div className="container">
          <div className="row mb-4 text-left">
            <div className="col-md-12">
              <h2>Upcoming scheduled sessions</h2>
            </div>
          </div>
          <div className="row text-left">{sessionDetails}</div>
        </div>
      </div>
    );
  }
}

export default StudentCourseContainer;
