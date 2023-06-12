import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import employeeService from '../services/employeeService';

export const UpdateEmployee = () => {

    const {id} = useParams();

    const navigate = useNavigate();

    const [employee,setEmployee] = useState({
        id : id,
        firstName : "",
        lastName : "",
        emailId : ""
    });

    const updateEmployee = (e) => {
        e.preventDefault();
        employeeService.updateEmployee(employee,id)
        .then(response=>{navigate("/employeelist")})
        .catch((err)=>{console.log(err);});
    }

    const handleChange = (e) => {
        const value = e.target.value;
        setEmployee({...employee,[e.target.name]:value});
    }

    const reset = (e) => {
        e.preventDefault();
        navigate("/employeelist");
    }

    useEffect(()=>{
        const fetchData = async () =>{
            try{
                const response = await employeeService.getEmployeeById(id);
                setEmployee(response.data);
            }catch(err){
                console.log(err);
            }
        };
        fetchData();
    },[])



  return (
    <div  className='max-w-2xl m-auto text-center shadow-2xl border my-10'>
        <div className='px-8 py-8'>
            <div className='p-5'>
                <h1 className='text-center text-3xl font-semibold'>Update Employee Information</h1>
            </div>
            <div className='mx-auto flex flex-col justify-center items-center'>
                <div className='h-14 w-full text-left my-4'>
                    <label className='block'>First Name</label>
                    <input type='text' name='firstName' value={employee.firstName} className='h-10 w-full border-2 px-2 py-2' onChange={(e) => handleChange(e)}></input>
                </div>
                <div className='h-14 w-full text-left my-4'>
                    <label className='block'>Last Name</label>
                    <input type='text' name='lastName' value={employee.lastName} className='h-10 w-full border-2 px-2 py-2 mx-auto' onChange={(e) => handleChange(e)}></input>
                </div>
                <div className='h-14 w-full text-left my-4'>
                    <label className='block'>Email</label>
                    <input type='email' name='emailId' value={employee.emailId} className='h-10 w-full border-2 px-2 py-2 mx-auto' onChange={(e) => handleChange(e)}></input>
                </div>
                <div className='h-14 w-full my-4 flex'>
                    <button className='rounded-md text-white font-semibold bg-blue-600 hover:bg-blue-500 p-2 mx-auto w-60 hover:scale-110' onClick={(e) => updateEmployee(e)}>Save</button>
                    <button className='rounded-md text-white font-semibold bg-red-600 hover:bg-red-500 p-2 mx-auto w-60 hover:scale-110'onClick={(e) => reset(e)} >Cancel</button>
                </div>
            </div>
        </div>

    </div>
  )
}
