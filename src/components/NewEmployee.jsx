import React, { useState } from 'react'
import employeeService from '../services/employeeService';
import { useNavigate } from 'react-router-dom';

export const NewEmployee = () => {

    const [employee,setEmployee] = useState({
        id : "",
        firstName : "",
        lastName : "",
        emailId : ""
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const value = e.target.value;
        setEmployee({...employee,[e.target.name]:value});
    }

    const saveEmployee = (e) => {
        e.preventDefault();
        employeeService.saveEmployee(employee)
        .then((response)=>
        {
            console.log(response);
            navigate("/");
        })
        .catch((err)=>{console.log(err);})
    }

    const reset = (e) => {
        e.preventDefault();
        setEmployee({
            id : "",
            firstName : "",
            lastName : "",
            emailId : ""
        });
    }


  return (
    <div  className='max-w-2xl m-auto text-center shadow-2xl border my-10'>
        <div className='px-8 py-8'>
            <div className='p-5'>
                <h1 className='text-center text-3xl font-semibold'>Add a new Employee</h1>
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
                    <button className='rounded-md text-white font-semibold bg-blue-600 hover:bg-blue-500 p-2 mx-auto w-60 hover:scale-110' onClick={(e) => saveEmployee(e)}>Submit</button>
                    <button className='rounded-md text-white font-semibold bg-red-600 hover:bg-red-500 p-2 mx-auto w-60 hover:scale-110'onClick={(e) => reset(e)} >Clear</button>
                </div>
            </div>
        </div>

    </div>
  )
}
