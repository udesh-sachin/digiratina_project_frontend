import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export default function editAccount(){
    
const [from ,setForm] = useState({
    name:"",
    nic:"",
    email:"",
    address1:"",
    address2:""
});

const {id} = useParams();

const handleForm = e => {
setForm({...from, [e.target.name]: e.target.value})
}


//submit function
const submit = e => {
e.preventDefault();
console.log(from);
axios.put(`http://localhost:3000/api/Bank/${id}`, from)
.then(res => {
    alert("successfull updated..!");
    console.log(res.data);
})
.catch(err => {
    alert("error!");
    console.log(res.data);
})

}

//get detalis for edit page 
const fetchById = () => {
    axios.get(`http://localhost:3000/api/Bank/${id}`)
    .then(res => {
        setForm(res.data);
         
    })
    .catch(err => {
        console.log(err);
    })
}

useEffect(() => {
    fetchById(); 
 }, [])

return (
<div><br />
    <h3><b>Update Account</b></h3>

  <form onSubmit={submit}>

    <div className="form-group mt-3">
        <label>  Full Name</label>
        <input type="text" value={from.name} onChange={handleForm} name="name" className="form-control mt-2" placeholder="enter name " />
    </div>


    <div className="form-group mt-3">
        <label>NIC No</label>
        <input type="text" value={from.nic} onChange={handleForm} name="nic" className="form-control mt-2" placeholder="enternic" />
    </div>

    <div className="form-group mt-3">
        <label>Email Address </label>
        <input type="email" value={from.email} onChange={handleForm} name="email" className="form-control mt-2" placeholder="enter email" />
    </div>

    <div className="form-group mt-3">
        <label>Address 1</label>
        <input type="text" value={from.address1} onChange={handleForm} name="address1" className="form-control mt-2" placeholder="enter address line1" />
    </div>

    <div className="form-group mt-3">
        <label>Address 2</label>
        <input type="text" value={from.address2} onChange={handleForm}  name="address2" className="form-control mt-2" placeholder="enter address line2" />
    </div>

    <div className="form-group mt-3" >
        <input type="submit" className='btn btn-primary mt-3' value="Submit" />
    </div>           
  </form>
</div>
)
}
