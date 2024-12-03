import React from 'react'
import { MdOutlineDeleteSweep } from "react-icons/md";

export default function TaskItem({task, handleDelete}) {
    const {taskName, teamMember, taskDate} = task;
  return (
    <li className='flex items-center gap-2 justify-between mb-3 border-b border-solid border-gray-300 pb-3'> 
        <div className='flex gap-2 items-center'>
            <input type="checkbox" class="checkbox checkbox-success" /> 
            <span className='flex flex-col'> <span className=' mb-1'> {taskName} <span className='bg-green-200 text-xs px-2 rounded-lg py-1'> {teamMember} </span> </span>  <span className='text-xs text-gray-600'> Date: {taskDate} </span> </span> 
        </div>
        <button className='text-3xl text-red-400' onClick={()=> handleDelete(task.taskName)}> <MdOutlineDeleteSweep /> </button>
    </li>
  )
}
