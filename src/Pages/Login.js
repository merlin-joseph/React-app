import React, { useState } from 'react';
import axios from "axios";

const url = "https://localhost:7266/User/login";

export function Login(){
  const [userName, setName]= useState('');
  const [password, setPassword] = useState('');

  const loginUser = () =>{
    axios.post(url,{userName,password}).then((response)=>{
      if(response?.data?.data){
        localStorage.setItem('accessToken', response.data.data);
        window.location.href = "/Products";

      }
    })
  }

  const handleSubmit=(e) => {
    e.preventDefault();
    loginUser();
  }
  return (
    <div className="login-wrapper">
      <div className="card">
        <h4 className = "text-purple text-center"> Login</h4>
        <input type="text" name="userName" value={userName} onChange={e => setName(e.target.value)} />
        <input type = "password" name="password" value={password} onChange={e => setPassword(e.target.value)} />
        <button onClick={(e) => handleSubmit(e)}>Submit</button>
      </div>    
    </div>
    )
}