import React from 'react';

function Studentdisplay(props) {
    const {item,ondeleteRow} = props;
    return (
               <tr key={item.Id}>
                    <td>{item.Id}</td> 
                    <td>{item.name}</td>
                    <td>{item.class}</td> 
                    <td>{item.training}</td> 
                    <td><button onClick={()=>{ondeleteRow(item.Id)}}>Del</button></td> 
                </tr>
    );
}

export default Studentdisplay;