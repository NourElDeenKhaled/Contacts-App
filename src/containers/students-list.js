import { useEffect } from "react";
import { connect } from "react-redux";
import Student from "../components/student";
const StudentsList = ({ list, history }) => {
  if (list) {
    if (list.length > 0)
      return (
        <div className="row">
          {list.map((student) => {
            return (
              <div className="alert col-sm-6">
                <Student
                  key={student.id}
                  studentInfo={student}
                  history={history}
                />
              </div>
            );
          })}
        </div>
      );
    return <p>Enter a valid name and search again</p>;
  }

  return <p>Enter a name and search.</p>;
};

const mapStateToProps = (state) => {
  return {
    list: state.students.list,
  };
};

export default connect(mapStateToProps, null)(StudentsList);
