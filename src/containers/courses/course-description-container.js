import React, { Component } from 'react';

import CourseCard from './course-description-card';
import { Messages } from '../../components';
import PropTypes from 'prop-types';

const API_FOR_STUDENT_SESSIONS = `${process.env.REACT_APP_RESTAPI_URL}:${
    process.env.REACT_APP_RESTAPI_PORT
    }/studentCourses`;

const getStudentCourses = id => {
    console.log(
        `\n\n\n\n API_FOR_STUDENT_SESSIONS: ${API_FOR_STUDENT_SESSIONS}/?Id=${id}`
    );
    return `${API_FOR_STUDENT_SESSIONS}/?Id=${id}`;
};

class StudentCourseDescriptionContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            studentCourseData: []
        };
    }

    componentDidMount() {
        console.log('URL: ', API_FOR_STUDENT_SESSIONS, this.props.id);
        fetch(getStudentCourses(this.props.id))
            .then(data => data.json())
            .then(data => {
                console.log('data ; ', data);

                this.setState({
                    studentCourseData: data
                });
            })
            .catch(err => {
                console.error('Error: ', err);
            });
    }

    render() {
        if (!this.state.studentCourseData.length) {

            return (
                <Messages
                    key={'msg' + new Date()}
                    title={'... message'}
                    body={'Currently, you do not have any sessions booked'}
                />
            );

        }
        let courseDetails = this.state.studentCourseData.map((courseDetail, idx) => {
            if (idx < 3) {
                return (
                    <CourseCard key={idx} meta={courseDetail} id={'card_' + idx} />
                );
            }
        }
        );

        return (
            <div className="album">
                <div className="container">
                    <div className="row mb-4 text-left">
                        <div className="col-md-12">
                            <h2>Course description</h2>
                        </div>
                    </div>
                    <div>
                        <div className="row text-left">{courseDetails}</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default StudentCourseDescriptionContainer;
