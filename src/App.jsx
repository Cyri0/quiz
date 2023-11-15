import {useEffect, useState} from 'react'
import Task from "./components/Task"

const App = () => {
    const [tasks, setTasks] = useState([])
    const [pos, setPos] = useState(0)

    useEffect(()=>{
        fetch("http://localhost:9000/data.json")
        .then(res => res.json())
        .then(d => {
            setTasks(d.data)
        })
    },[])

    const pagination = (direction) => {
        if(pos + direction < 0 ){
            setPos(tasks.length-1)
        }
        else if(pos + direction > tasks.length-1)
        {
            setPos(0)
        }else{
            setPos(pos => pos + direction)
        }
    }

    return (
        <div>
            <h2>Task No. {pos + 1}</h2>
            <Task data={tasks[pos]} />

            <button onClick={() => pagination(-1)}>Balra</button>
            <button onClick={() => pagination(1)}>Jobbra</button>

        </div>
    )
}

export default App