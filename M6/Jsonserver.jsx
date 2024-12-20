import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Table from 'react-bootstrap/Table';
const Jsonserver = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: ''
      });
      const [id,setId]=useState('')
    const [userdata,setUserdata] = useState([])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };

      const dispData = ()=>{
        axios.get('http://localhost:4000/user')
            .then((res)=>setUserdata(res.data))
        
        
    }
    useEffect(()=>{
            dispData()
        },[])


      const handleSubmit = (e) => {
        e.preventDefault();
        if(id!=''){
          axios.put('http://localhost:4000/user/'+id,formData)
          .then((res)=>console.log(res))
        }else{
          axios.post('http://localhost:4000/user',formData)
          .then((res)=>console.log(res))
        }
        

        dispData()

    

      };

      const editdata = (id)=>{
        setId(id)
        axios.patch('http://localhost:4000/user/'+id)
        .then((res)=>setFormData(res.data))
    }

      const deldata = (id)=>{
        axios.delete('http://localhost:4000/user/'+id)
        .then((res)=>console.log(res))
        dispData()
    }

  return (
    
    <>
    <div style={{display:"flex"}}>
<div className="form-container">
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            onChange={handleChange}
            required
            value={formData.firstName}
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
    <div className="tablediv">
    <Table striped bordered hover>
      <thead>
        <tr>
          
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>

      {userdata.map((i)=>{
            return(
                    <tr>
                        <td>{i.firstName}</td>
                        <td>{i.lastName}</td>
                        <td>{i.email}</td>
                        <td>
                            <button onClick={()=>editdata(i.id)}>Edit</button>
                            <button onClick={()=>deldata(i.id)}>Delete</button>
                        </td>

                    </tr>
            )
        })
      } 
                </tbody>

    </Table>
    </div>
    </div>
    
    
    </>
  )
}

export default Jsonserver