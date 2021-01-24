import React, {useState} from 'react';

const ToDoList = () => {
  const [task, setTask] = useState('');
  const [scheduledTime, setScheduledTime] = useState(0);
  const [finished, setFinished] = useState(false);

  return(
    <div>
      <h3>TodO LiST</h3>
      <form action="">
        <input type="text"/>
        <input type="number" name="" id=""/>
        <input type="checkbox"/>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default ToDoList;