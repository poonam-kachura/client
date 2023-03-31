import Employee from "./Employee";

function EmployeeList(){
    return(
        <div>
            <h1> This is Parent class</h1>
            <Employee Name="Poonam" class="IT" Subject={"HTML ,CSS, JS"} />
            <Employee Name="Happy" class="Army" Subject={"pqe, pol"}/>
            <Employee Name="Parveen" class="ME" Subject={"abc, def"}/>
            <Employee Name="Ilakshi" class="ECE" Subject={"AI, CN"}/>
        </div>
    )
    //Marks ={grade : "A"}

}
export default EmployeeList;