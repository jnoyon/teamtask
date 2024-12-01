import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import dateFormat from "dateformat";
import TaskItem from './TaskItem';

export default function AddTask() {
    const now = new Date();
    const [tasks, setTasks] = useState([]); 
    const [isTaskListVisible, setIsTaskListVisible] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        const taskName = e.target.taskname.value;
        const teamMember = e.target.teammember.value;
        const taskDate = dateFormat(now, "dddd, mmmm dS, yyyy, h:MM:ss TT");
    
        // Validate if taskName and teamMember are not empty
        if (!taskName.trim()) {
            // If either taskName or teamMember is empty, show an alert or toast message
            toast.error('কিছু লেখা হয়নি');
        } else {
            // If both are valid, proceed with adding the task
            const newTask = { taskName, teamMember, taskDate };
            setTasks([...tasks, newTask]);
    
            // Clear the form fields
            e.target.reset();
    
            // Optionally show a success message
            toast.success('টাক্স যুক্ত করা হয়েছে!');

            setIsTaskListVisible(true);
        }
    }
    const handleDelete =(taskName) =>{
        // Remove the task from the tasks array by filtering it out
        const updatedTasks = tasks.filter(task => task.taskName !== taskName);
        
        // Update the tasks state with the filtered array
        setTasks(updatedTasks);

        // Optionally show a toast or log a message
        toast.success('টাক্স মুছে ফেলা হয়েছে!');
    }
    

  return (
    <div>
        <form className='grid grid-cols-2 gap-2 mb-5' onSubmit={handleSubmit}>
        <input  type="text" placeholder="Type here" className="input input-bordered input-secondary w-full col-span-2" name='taskname' />
            <select class="select font-bold select-secondary w-full" name='teammember'>
                <option>সম্বলিত কাজ</option>
                <option>তাশারফ</option>
                <option>তানিম</option>
                <option>নয়ন</option>
            </select>
            <input type="submit" value="যুক্ত করুন" className='btn btn-block col-span-1 btn-secondary' />
        </form>
        {isTaskListVisible && (
                <h2 className="divider devider-success font-bold">কাজের তালিকা</h2>
            )}
        <ul>  { tasks.map(task => <TaskItem task={task} key={task.taskname} handleDelete={handleDelete}></TaskItem>) } </ul>
        <Toaster position="bottom-center" />
    </div>
  )
}
