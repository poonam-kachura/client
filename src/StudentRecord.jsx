import {useState} from "react";
import Studentdisplay from "./Studentdisplay";

function StudentRecord(){
    const [myname,setname] = useState("poonam");


    const studentData = [
        {Id : 1, name : "Poonam", class : "IT", training :"yes" },
        {Id : 2, name : "Happy", class : "BA", training :"yes" },
        {Id : 3, name : "Parveen", class : "ME", training :"yes" },
        {Id : 4, name : "Sangam", class : "third", training :"No" },
        {Id : 5, name : "Sargun", class : "IT", training :"No" },
        {Id : 6, name : "Ronak", class : "IT", training :"No" },
        {Id : 7, name : "Mannu", class : "10th", training :"No" },
        {Id : 8, name : "Kajal", class : "BA", training :"No" },
        {Id : 9, name : "Ilakshi", class : "ECE", training :"yes" },
        {Id : 10, name : "Gurman", class : "ECE", training :"yes" }
    ]

    const [studentList, setStudentList] = useState(studentData);

    const deleteRow =(Id) => {
        const filterData = studentList.filter((item)=> {
            return item.Id !== Id;
        })
        setStudentList(filterData);
    }

    const changeName = () => {
        setname("happy")
    }

    return (

       <div>
        {myname}
        <button type="button" onClick={changeName}>Click me to change the name</button> 
        
        
        <table>
            <tr>
                <td>Id</td>
                <td>name</td>
                <td>class</td>
                <td>training</td>
            </tr>

            {

            studentList.map((value,index) => (
                <Studentdisplay key={value.id} item={value}
                ondeleteRow={deleteRow}/>
             //   value.class === "IT" ? (
                //return (
               // <tr key={value.Id} className={value.class === "IT" ? "d1": "d2"}>
                
           //     ) : null
              //  )
            ))
            }
        </table>

        </div>

    
    )
}

export default StudentRecord;

