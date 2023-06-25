import React, { useEffect, useState } from 'react'
import './App.css';
export default function App() {
const data={name:"",email:"",password:""}
const [inputData,setData]=useState(data);
const [flag,setFlag]=useState(false);
useEffect(
  ()=>{
 console.log("registred");
  },[flag]
)
function handleData(e){
setData({...inputData,[e.target.name] :e.target.value})
console.log(inputData);
}
function handleSubmit(e){
  e.preventDefault();
if(!inputData.name|| !inputData.email ||!inputData.password){
  alert("All field are Mandatory");

}else{
setFlag(true);
}
}
  return (
    <>
     <pre>
      {(flag)?<h2 className='ui-define'>Hello {inputData.name} you have Register succesfully!!!</h2>: ""}
    </pre>
    <div class="container">
   
<form onSubmit={handleSubmit}>

<h1 class="header">Registration Form</h1>
  
  <div>
    <input type="text" placeholder='Enter the name' name="name" value={inputData.name} onChange={handleData} />
  </div>
  <div>
    <input type="text" placeholder='Enter the Email' name="email"  value={inputData.email} onChange={handleData}/>
  </div>
  <div>
    <input type="text" placeholder='Enter the password' name="password"  value={inputData.password} onChange={handleData}/>
  </div>
  <div>
<button type='submit'>submit</button>
  </div>

</form>

    </div>
    <div>
      <p>Authroised page By</p>
<p>Ashish Vade</p>
<p>ashishvade1999@gmail.com</p>
<p>7083900792</p>

  </div>
    </>
  )
}
