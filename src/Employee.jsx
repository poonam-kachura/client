function Employee(props){
    return(
        <div>
            <h1>This is child class</h1>
            <h3>{props.Name} {props.class} {props.Subject} </h3>
            
        </div>
    )

}
export default Employee;