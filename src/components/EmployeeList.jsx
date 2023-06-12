import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import employeeService from '../services/employeeService';

export const EmployeeList = () => {

    const nav = useNavigate();

    const [employees,setEmployees] = useState(null);
    const [loading,setLoading] = useState(true);

    const fetchData = async () => {
        setLoading(true);
        try{
            const response = await employeeService.getEmployees();
            setEmployees(response.data);
            console.log(employees);
        }
        catch(error){
            console.error(error);
        }
        setLoading(false);
      };


    const deleteEmployee = (e,id) => {
        e.preventDefault();
        employeeService.deleteEmployee(id)
        .then((response)=>{
            if(employees){
                setEmployees((prevList)=>{
                    return prevList.filter((employee)=>employee.id !== id);
                });
            }
        })
    }

    const editEmployee = (e,id) => {
        e.preventDefault();
        nav(`/updateemployee/${id}`);
    }



    useEffect(() => {

      fetchData();

    
    }, [])
    


  return (
    <div className=''>
    <div className='h-10 mx-auto p-5 mb-16'>
        <button className='rounded bg-blue-500 text-white text-xl p-2 hover:bg-blue-400 hover:scale-90 transition duration-500' onClick={()=>nav("/addemployee")}>+ Add Employee</button>
    </div>

    <div className='flex shadow border-b'>
        <table className='min-w-full'>
            <thead className=''>
                <tr className='text-lg'>
                    <th className='font-medium'>First Name</th>
                    <th className='font-medium'>Last Name</th>
                    <th className='font-medium'>Email ID</th>
                    <th className='font-medium'>Actions</th>
                </tr>
            </thead>
{           !loading &&    
            <tbody className='text-center'>

                {
                    employees.map((employee)=>{
                        return(
                        <tr key={employee.id}>
                        <td className='p-2'>{employee.firstName}</td>
                        <td className='p-2'>{employee.lastName}</td>
                        <td className='p-2'>{employee.emailId}</td>
                        <td className='p-2 space-x-3'>
                            <button className='text-blue-500 hover:text-blue-700 cursor-pointer' onClick={(e,id)=>editEmployee(e,employee.id)} >Edit</button>
                            <button className='text-red-600 hover:text-red-800 cursor-pointer' onClick={(e,id) => deleteEmployee(e,employee.id)} >Delete</button>
                        </td>
                    </tr>
                    )

                    })
                }



            </tbody>}
        </table>

    </div>

    </div>
  )
}
