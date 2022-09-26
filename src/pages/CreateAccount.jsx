 
import axios from 'axios'
import React ,{ useState } from 'react'


import Swal from 'sweetalert2/dist/sweetalert2.js'


export default function CreateAccount() {
   
    const [from ,setForm] = useState({
        name:"",
        nic:"",
        email:"",
        address1:"",
        address2:""
    });

 const handleForm = e => {
    setForm({...from, [e.target.name]: e.target.value})
 }


 //submit funtion
 const submit = e => {
    e.preventDefault();
    console.log(from);
    axios.post(`http://localhost:3000/api/Bank`, from)
    .then(res => {
        //alert("successfull");
        Swal.fire(
            'Successfully!',
            'You clicked the button!',
            'success'
          )
        console.log(res.data);
    })
    .catch(err => {
        // alert("error!");
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            // footer: '<a href="">Why do I have this issue?</a>'
          })
        console.log(res.data);
    })
 }

  return (
    <div><br/>
        <h3><b>Create Account</b></h3>
      <form onSubmit={submit}>

        <div className="form-group mt-3">
            <label>  Full Name</label>
            <input type="text" onChange={handleForm} name="name" className="form-control mt-2" placeholder="enter name " />
        </div>

 
        <div className="form-group mt-3">
            <label>NIC No</label>
            <input type="text" onChange={handleForm} name="nic" className="form-control mt-2" placeholder="enternic" />
        </div>

        <div className="form-group mt-3">
            <label>Email Address </label>
            <input type="email" onChange={handleForm} name="email" className="form-control mt-2" placeholder="enter email" />
        </div>

        <div className="form-group mt-3">
            <label>Address 1</label>
            <input type="text" onChange={handleForm} name="address1" className="form-control mt-2" placeholder="enter address line1" />
        </div>

        <div className="form-group mt-3">
            <label>Address 2</label>
            <input type="text" onChange={handleForm}  name="address2" className="form-control mt-2" placeholder="enter address line2" />
        </div>

        <div className="form-group mt-3" >
            <input type="submit" className='btn btn-primary mt-3' value="Submit" />
        </div>           
      </form>
    </div>
  )
}
