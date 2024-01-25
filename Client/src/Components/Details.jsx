import React, { useEffect, useState } from "react";
import CreateIcon from "@mui/icons-material/Create";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import { CardContent } from "@mui/material";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import WorkIcon from '@mui/icons-material/Work';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { NavLink, useNavigate, useParams } from "react-router-dom";


const Details = () => {

  const {id} = useParams("")
  console.log(id);

  const history = useNavigate()

  const [getuserData, setUserData] = useState([])
  console.log(getuserData);

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
      setUserData(data)
      console.log("Get Data");
    }
  }

  useEffect(()=>{
    getData()
  },[])

  
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
    history("/")
  }
}

  return (
    <div className="container mt-3">
      <h1 style={{ fontWeight: "400" }}>Welcome Hafiz Usama</h1>

      <Card sx={{ maxWidth: 600 }}>
        <CardContent>
        <div className="add_btn">
          <NavLink to={`/edit/${getuserData._id}`}><button className='btn btn-primary mx-2'><CreateIcon/></button></NavLink>  
         <NavLink><button className='btn btn-danger' onClick={()=>deleteuser(getuserData._id)}><DeleteOutlineIcon/></button></NavLink>
            </div> 
          <div className="row">
          <div className="left_view col-lg-6 col-md-6 col-12">
          <img src="/profile.png" style={{ width: "80px" }} alt="profile" />
          <h3 className="mt-3">
            Name: <span>{getuserData.name}</span>
          </h3>
          <h3 className="mt-3">
            Age: <span>{getuserData.age}</span>
          </h3>
          <p className="mt-3"><MailOutlineIcon/>Email: <span>{getuserData.email}</span></p>
          <p className="mt-3"><WorkIcon/>Occuption: <span>{getuserData.work}</span></p>
          </div>
          <div className="right_view col-lg-6 col-md-6 col-12">
            <p className="mt-5"><PhoneIphoneIcon/>Mobile: <span>{getuserData.mobile}</span></p>
            <p className="mt-3"><LocationOnIcon/>Location: <span>{getuserData.add}</span></p>
            <p className="mt-3">Description: <span>{getuserData.desc}</span></p>
          </div>

          </div>
         
        </CardContent>
      </Card>
    </div>
  );
};

export default Details;
