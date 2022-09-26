import axios from 'axios'
import React ,{useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom';
import Swal from 'sweetalert2/dist/sweetalert2.js'

export default function Home() {

const [account ,setAccount] = useState ([]);
const [search ,setSearch] = useState("");

const navigate = useNavigate();

//getmethod

const fetch = () => {
    axios.get(`http://localhost:3000/api/Bank/`)
    .then(res => {
        setAccount(res.data);
        console.log(setAccount);
    })
    .catch(err => {
        console.log(err);
    })
}

const  onClickUpdate =(e,id) => {
    navigate(`/account/${id}`)
}
 

useEffect(() => {
    fetch();
},[]);


// delete item
const remove = (e ,id) => {
    axios.delete(`http://localhost:3000/api/Bank/${id}`)
    .then(res => {
        //alert("delete successfull...!");
        Swal.fire(
            'Successfully!',
            'You clicked the button!',
            'success'
          )
          fetch();
        
    })
    .catch(err => {
       // alert("Error..!");
       Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
        // footer: '<a href="">Why do I have this issue?</a>'
      })
    })
}

//search
const onSearchChange = e => {
    setSearch(e.target.value)
}

const SearchInput = () => {
    if(search) {
        const values = { name: search } ;
        axios.post(`http://localhost:3000/api/Bank/search`,values)
        .then(res => {
            setAccount(res.data);
        })
        .catch(err => {
            console.log(err);
        })
    }else {
        fetch();
    }
}

  return (
    <div > <br />
        <p ><h2><b>Account Deatils</b></h2></p>

        <div class="d-flex" role="search">
            <input class="form-control me-5" type="search" onChange={onSearchChange} placeholder="Search" aria-label="Search"/>
            <button class="btn btn-outline-success" onClick={SearchInput} type="submit">Search</button>
        </div>

         <table className='table mt-3'>
            <thead>
                <tr>
                    <th>Acc_No</th>
                    <th>User Name </th>
                    <th>user NIC </th>
                    <th>user Email </th>
                    <th>user address line1 </th>
                    <th>user address line2 </th>
                </tr>
            </thead>  
            <tbody> 
            {
                account && account.map((acc,index) => (
                    <tr key={index}>
                        
                        <td>{acc._id.substring(0,4)}</td>
                        <td> {acc.name} </td>
                        <td> {acc.nic} </td>
                        <td> {acc.email} </td>
                        <td> {acc.address1} </td>
                        <td> {acc.address2} </td>

                        <div  className= "  gap-3 d-flex  ">
                        <button type='button' className='btn btn-sm  btn-success' value ="Edit" onClick={e => onClickUpdate(e, acc._id)} >Edit</button>
                        <button type='button' className='btn btn-sm btn-primary' value ="Delete" onClick={e => remove(e, acc._id)} >Delete</button>
                        </div>
                    </tr>
                ))

            }
            </tbody> 
        </table>   
    </div>
  )
}
