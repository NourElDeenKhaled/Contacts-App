import { addStudent, getStudents } from '../actions'
import { useRef } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
const AddStudent = ({addStudent, getStudents}) => {
    const name = useRef()
    const age = useRef()
    const phone = useRef()

    const addTheStudent = async () => {
        //email
        let str1 = phone.current.value;
        let bool1 = /^011/.test(str1) ; 
        let bool2 = /^010/.test(str1) ; 
        let bool3 = /^012/.test(str1) ; 
        if(name.current.value != "" && age.current.value != "" && phone.current.value != ""
        && age.current.value >= 18 && age.current.value <= 60 && bool1 || bool2 || bool3)
        {
            await addStudent(name.current.value, age.current.value, phone.current.value)
            await getStudents("")
        } else {
            alert("Form is wrong")
        }
    }

    return (
        <form>
            <div className="form-group">
                <input ref={name} type="text"
                className="form-control" name="name" id="name" placeholder="Name" required/>
            </div>
            <div className="form-group">
                <input ref={age} type="number"
                className="form-control" min="18" max="60" name="name" id="name" placeholder="Age" required/>
            </div>
            <div className="form-group">
                <input ref={phone} type="text"
                className="form-control" name="name" id="name" placeholder="Phone" required/>
            </div>
            <div className="d-flex">
                <button type="button" style={{width:'200px'}} className="btn btn-success mx-auto rounded-pill"
                onClick={addTheStudent}
                >Add</button>
            </div>
        </form>
    )
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ addStudent, getStudents }, dispatch)
}
export default connect(null, mapDispatchToProps)(AddStudent)