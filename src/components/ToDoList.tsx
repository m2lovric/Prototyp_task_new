import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { db } from '../modules/Firebase/firebase';
import { v4 as uuidv4 } from 'uuid';
import './toDoList.scss';

const ToDoList = () => {
  const [task, setTask] = useState('');
  const [scheduledTime, setScheduledTime] = useState(0);
  const [finished, setFinished] = useState(false);
  const [data, setData] = useState([]);

  const tasks = useSelector(state => state.list);
  const userId = useSelector(state => state.user);

  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    db.collection(userId).doc(uuidv4()).set({
      id: uuidv4(),
      task,
      scheduledTime,
      finished
    })
      .then(function () {
        console.log("Document successfully written!");
      })
      .catch(function (error) {
        console.error("Error writing document: ", error);
      });

    setTask('');
    setScheduledTime(0);
  }

  useEffect(() => {
    const getData = async () => {
      const snapshot = await db.collection(userId).get();
      snapshot.docs.map(el => {
        const snap = el.data()
        setData(data => [...data, snap]);
      });
    }

    userId ? getData() : '';
  }, []);

  return (
    <div>
      <h3>TodO LiST</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" value={task} onChange={(e) => setTask(e.target.value)} />
        <input type="number" value={scheduledTime} onChange={(e) => setScheduledTime(parseInt(e.target.value))} />
        <input type="checkbox" onChange={(e) => setFinished(e.target.checked)} />
        <button type="submit">Submit</button>
      </form>
      {
        data.map(el => {
          return (
            <article className="article" key={el.id}>
              <p>{el.task}</p>
              <p>{el.scheduledTime}</p>
              <p>{el.finished}</p>
            </article>
          )
        })
      }
    </div>
  )
}

export default ToDoList;