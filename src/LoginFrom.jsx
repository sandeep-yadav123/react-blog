import React, { useState } from 'react';


const LoginFrom = () =>{

    const [fullName, setfullName] = useState({
        fname :"",
        lname :"",
        email :"",
        phone :""
    });

    const dataEvent = (event) => {
       //const name = event.target.name;
       const {name ,value} = event.target;

       setfullName((preValue) =>{
            if(name ===  "fname")
            {
                return{
                    fname : value,
                    lname : preValue.lname,
                    email : preValue.email,
                    phone : preValue.phone
                }
            } else  if(name ===  "lname")
            {
                return{
                    fname : preValue.fname,
                    lname : value,
                    email : preValue.email,
                    phone : preValue.phone
                }
            }
            else  if(name ===  "email")
            {
                return{
                    fname : preValue.fname,
                    lname : preValue.lname,
                    email : value,
                    phone : preValue.phone
                }
            }
            else  if(name ===  "phone")
            {
                return{
                    fname : preValue.fname,
                    lname : preValue.lname,
                    email : preValue.email,
                    phone : value
                }
            }
       });
    };

    const loginSubmit = (event) =>{
        event.preventDefault();
    };

    return(
        <>
            <h1>Login Form</h1>
            <p>FullName : {fullName.fname} {fullName.lname}</p>
            <p>Email : {fullName.email}</p>
            <p>Phone : {fullName.phone}</p>
            <form onSubmit={loginSubmit}>
                <label>First Name</label>
                <input 
                type="text" 
                onChange={dataEvent} 
                name="fname"
                placeholder="Enter Fname" 
                value={fullName.fName} 
                />
                <label>Last Name</label>
                <input 
                  type="text"
                  onChange={dataEvent}
                  name="lname"
                  placeholder="Enter Lname" 
                  value={fullName.lName} 
                  />
                <label>Email</label>
                <input 
                  type="text"
                  onChange={dataEvent}
                  name="email"
                  placeholder="Enter Lname" 
                  //value={lName} 
                  />
                <label>Phone Number</label>
                <input 
                  type="text"
                  onChange={dataEvent}
                  name="phone"
                  placeholder="Enter Lname" 
                  //value={lName} 
                  />
                <div className="row">
                    <button type="submit">Submit :+1:</button>
                </div>
            </form>
        </>
      );

};

export default LoginFrom;