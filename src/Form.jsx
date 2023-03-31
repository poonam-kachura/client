import React from 'react';
import { useState } from 'react';

function Form(props) {

    const [formData,setFormData] = useState();

    const handleInput = (event)=> {
        const name = event.target.name;
        const value = event.target.value;

        setFormData((prev) =>({
            ...prev,
            [name]:value
        }))
        
    }
    return (
        <div className="Container">
            <div className="mb-3">
                <form>
                    <input type="text" name="name" placeholder='name' className="form-control" onChange={handleInput}/>
                    <input type="email" name="email" placeholder='email' className="form-control" onChange={handleInput}/>
                    <input type="password" name="password" placeholder='password' className="form-control" onChange={handleInput}/>
                    <input type="text" name="mobile" placeholder='mobile number' className="form-control" onChange={handleInput}/>
                    <input type="text" name="clgname" placeholder='college name' className="form-control" onChange={handleInput}/>
                    select your branch  
                    IT <input type="radio" name ="branch"  onChange={handleInput}/> 
                    ECE <input type="radio" name="branch"  onChange={handleInput}/>
                    CSE <input type="radio" name = "branch"  onChange={handleInput}/>
                    CE <input type="radio" name = "branch" onChange={handleInput}/> 
                    EE <input type="radio" name ="branch" onChange={handleInput}/>
                    
                    select your city
                    
                     <select onChange={handleInput}>
                       <option >Jalalabad</option>
                       <option > Jalandhar</option>
                       <option >Ferozpur</option>
                      <option> Chandigarh </option>
                      <option >Ludhiana </option>
                    </select> 
                   
                </form>
                <h3>{formData?.name} {formData?.email} {formData?.password} {formData?.mobile} {formData?.clgname} {formData?.branch}</h3>
            </div>
            
            
        </div>
    );
}

export default Form;