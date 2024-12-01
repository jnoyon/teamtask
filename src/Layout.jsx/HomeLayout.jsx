import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import AddTask from '../components/AddTask'
import TaskList from '../components/TaskList'

export default function HomeLayout() {
  return (
    <div className='mx-auto w-11/12'>
        
        <AddTask></AddTask>
       <TaskList></TaskList>
    </div>
  )
}
