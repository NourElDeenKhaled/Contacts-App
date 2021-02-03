import { useEffect } from 'react';
import { connect } from 'react-redux';
import Student from '../components/student'
const StudentsList = ({list ,history}) => {
    if (list) {
        if (list.length > 0)
            return (
                <div className="alert">
                    {list.map((student) => {
                        return <Student key={student.id} studentInfo={student} history={history}/>
                    })}
                </div>
                )
        return <p>
            Enter a valid name and search again
        </p>
    }

    return <p>
        Enter a name and search.
    </p>
}

const mapStateToProps = (state) => {
    return {
        list: state.students.list
    }
}

export default connect(mapStateToProps, null)(StudentsList)