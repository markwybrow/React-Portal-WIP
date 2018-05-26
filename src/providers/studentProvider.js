import React ,{ Component } from 'react'

// Start:
// import StudentProvider from '../providers/studentProvider';
const StudentContext = React.createContext();

class StudentProvider extends Component {
    state = {
        studentData: []
    };

    render() {
        return (
            <StudentContext.Provider value="THIS IS from the student Provider">
                {this.state.children}
            </StudentContext.Provider>
        );
    }
}

// :End

export default StudentProvider;