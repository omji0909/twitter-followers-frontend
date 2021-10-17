import React, {useState}from "react";
import { getfollowers } from "./apihelper/apicall";





const App= ()=>{

    const [values,setValues]=useState({
        userName:"",
        error:false,
        success:false
    })
    const [users,setUsers]=useState({});

    const {userName}=values;
    const handleChange =name=>event=>{
        setValues({...values,error:false,[name]:event.target.value})
    };
    const onSubmit =(event)=>{
        event.preventDefault();
        setUsers({})
        getfollowers({userName})
        .then(data=>{
            setValues({...values,userName:""})
            return setUsers(data);
        }).catch(err =>{
            console.log(err);
        })

    }

    const showFollowers=()=>{
        const allfollowers =users["users"]; //getting list of followers 
        // console.log(allfollowers)
        return (
            <div>
                 {allfollowers && allfollowers.map((u,i)=>{ //looping thorough all followers
                     return (
                         <h1 key={i} >{u.name}</h1>
                     )
                 })}
                </div>
           )
    }

    const inputFrom=()=>{
        return (
            <form>
            <h3>Enter Twitter handle  </h3>
            <input onChange={handleChange("userName")} name="userName" placeholder="Enter your handle" value={userName} />
            <button type="submit" onClick={onSubmit} >Submit</button>
        </form>
    )
        
    }
    return (
        <div>
            {inputFrom()}
            {showFollowers()}
        </div>
    )
        
}

export default App;