import React, { useEffect, useState } from 'react';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import CreateIcon from '@mui/icons-material/Create';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { NavLink } from 'react-router-dom';

const Home = () => {

  const [getuserData, setUserData] = useState([])
  console.log(getuserData);

  const getData = async (e)=>{

    const res = await fetch("http://localhost:8003/getdata",{
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
      setUserData(data)
      console.log("Get Data");
    }
  }

  useEffect(()=>{
    getData()
  },[]);

 const deleteuser = async(id)=>{
    const res2 = await fetch(`http://localhost:8003/deleteuser/${id}`,{
      method:"DELETE",
      headers:{
        "Content-Type":"application/json"
      }
    })
    const deletedata = await  res2.json();
    console.log(deletedata);

    if (res2.status === 422 || !deletedata) {
      console.log("error");
    }else{
      console.log("user deleted");
      getData();
    }
 }


  return (
    <div className='mt-5'>
        <div className="container">
            <div className="add_btn mt-2 mb-2">
                <NavLink to="/register" className='btn btn-primary'>
                    Add data
                </NavLink>
            </div>
            <table className="table">
  <thead>
    <tr className='table-dark'>
      <th scope="col">Id</th>
      <th scope="col">Usename</th>
      <th scope="col">Email</th>
      <th scope="col">Job</th>
      <th scope="col">Number</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>


{
  getuserData.map((element,id)=>{
    return(
      <>
       <tr>
      <th scope="row">{id + 1}</th>
      <td>{element.name}</td>
      <td>{element.email}</td>
      <td>{element.age}</td>
      <td>{element.mobile}</td>
      {/* <td>{element.work}</td>
      <td>{element.add}</td>
      <td>{element.desc}</td> */}
      <td className='d-flex justify-content-between'>
        <NavLink to={`/view/${element._id}`}><button className='btn btn-success'><RemoveRedEyeIcon/></button></NavLink>
        <NavLink to={`edit/${element._id}`}><button className='btn btn-primary'><CreateIcon/></button></NavLink>
        <NavLink><button className='btn btn-danger' onClick={()=>deleteuser(element._id)}><DeleteOutlineIcon/></button></NavLink>
      </td>
    </tr>
      </>
    )
  })
}
  </tbody>
</table>
        </div>
      
    </div>
  );
}

export default Home;
