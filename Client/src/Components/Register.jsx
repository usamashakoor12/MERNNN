import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const Register = () => {

  const history = useNavigate()

 const [inpVal, setINP] = useState({
    name: "",
    email: "",
    age: "",
    mobile: "",
    work: "",
    add: "",
    desc: ""
 })

    const setData = (e)=>{
        console.log(e.target.value);
        const {name, value} = e.target;
        setINP((preval)=> {
            return {
                ...preval,
                [name]:value
            }
        })

    }

    const addinpdata = async (e)=>{
      e.preventDefault();

      const {name, email, age, mobile, work, add, desc} = inpVal

      const res = await fetch("http://localhost:8003/register",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          name, email, age, mobile, work, add, desc
        })
      });

      const data = await res.json();
      console.log(data);

      if (res.status === 422 || !data) {
        alert("error")
        console.log("error");
      }else{
        alert("added data");
        history("/")
        console.log("added data");
      }
    }

  return (
    <div className='container'>
        <NavLink to='/'>Home</NavLink>
        <form className='mt-4'>
        <div className="row">
  <div className="mb-3 col-lg-6 col-md-6 col-12">
    <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
    <input type="text" value={inpVal.name} name='name' onChange={setData} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
  </div>
  <div className="mb-3 col-lg-6 col-md-6 col-12">
    <label htmlFor="exampleInputPassword1" className="form-label">Email</label>
    <input type="email" value={inpVal.email} name='email' onChange={setData}  className="form-control" id="exampleInputPassword2" />
  </div>
  <div className="mb-3 col-lg-6 col-md-6 col-12">
    <label htmlFor="exampleInputPassword1" className="form-label">Age</label>
    <input type="text" value={inpVal.age} name='age' onChange={setData}  className="form-control" id="exampleInputPassword3" />
  </div>
  <div className="mb-3 col-lg-6 col-md-6 col-12">
    <label htmlFor="exampleInputPassword1" className="form-label">Mobile</label>
    <input type="number" value={inpVal.mobile} name='mobile' onChange={setData}  className="form-control" id="exampleInputPassword4" />
  </div>
  <div className="mb-3 col-lg-6 col-md-6 col-12">
    <label htmlFor="exampleInputPassword1" className="form-label">Work</label>
    <input type="text" value={inpVal.work} name='work' onChange={setData} className="form-control" id="exampleInputPassword5" />
  </div>
  <div className="mb-3 col-lg-6 col-md-6 col-12">
    <label htmlFor="exampleInputPassword1" className="form-label">Address</label>
    <input type="text" value={inpVal.add} name='add' onChange={setData}  className="form-control" id="exampleInputPassword6" />
  </div>
  <div className="mb-3 col-lg-12 col-md-12 col-12">
    <label htmlFor="exampleInputPassword1" className="form-label">Description</label>
    <textarea value={inpVal.desc} name="desc" onChange={setData}  className='form-control' id="" cols="30" rows="5"></textarea>
  </div>
  
  <button type="submit" onClick={addinpdata} className="btn btn-primary">Submit</button>
  </div>

</form>

    </div>
  )
}

export default Register