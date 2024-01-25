import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate, useParams } from 'react-router-dom'


const Edit = () => {

  
  // const [getuserData, setUserData] = useState([])
  // console.log(getuserData);

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

    const {id} = useParams("")
    console.log(id);
  
    const getData = async ()=>{
  
      const res = await fetch(`http://localhost:8003/getuser/${id}`,{
        method:"GET",
        headers:{
          "Content-Type":"application/json"
        }
      });
  
      const data = await res.json();
      console.log(data);
  
      if (res.status === 404 || !data) {
        alert("error")
        console.log("error");
      }else{
        setINP(data)
        console.log("Get Data");
      }
    }

    useEffect(()=>{
      getData()
    },[]);

    const updatedata = async(e)=>{
      e.preventDefault();

      const {name, email, age, mobile, work, add, desc} = inpVal

      const res2 = await fetch(`http://localhost:8003/updateuser/${id}`,{
        method:"PATCH",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          name, email, age, mobile, work, add, desc
        })
      });
      const data2 = await res2.json();
      console.log(data2);

      if (res2.status === 422 || !data2) {
        alert("Please Fill Details")
      }else{
        alert("Data Updated");
        history("/")
      }
    }
  

  return (
    <div className='container'>
    <NavLink to='/'>Home22</NavLink>
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

<button type="submit" onClick={updatedata} className="btn btn-primary">Submit</button>
</div>

</form>

</div>
  );
}

export default Edit;
