// props =  read-only properties that are shared between components.
//                A parent component can send data to a child component.
//                key=value

// propTypes = a mechanism that ensures that the passed value
//                        is of the correct datatype.
//                       age: PropTypes.number

// defaultProps = default values for props in case they are not
//                            passed from the parent component
//                            name: "Guest"

import Student from './Student.jsx'

function App() {
  return(
    <>
    <Student name="Matko" age={30} isStudent={true}/>
    <Student name="Riso" age={42} isStudent={false} />
    <Student name="Marek" age={17} isStudent={false} />
    <Student name="Andy" age={19} isStudent={true} />
    <Student />
    </>
  );
}

export default App
