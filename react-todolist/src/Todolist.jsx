import { useState } from "react";
function Todolist(){
    const [tasks, setTasks] = useState([]);
    const [textinput, settextinput] = useState("")
    
    function handletextinput(event){
        settextinput(event.target.value)
    }
    function addtasks() {
        if (textinput.trim() !== "") {
            setTasks([...tasks, textinput])
            settextinput("")
        }
        
    }
    function deletetasks(index){
        setTasks(tasks.filter((task, i) => i !== index))
    }
    function moveup(index){
        if (index > 0) {
            const newtasks = [...tasks]
            let temp = newtasks[index]
            newtasks[index] = newtasks[index - 1]
            newtasks[index - 1] = temp
            setTasks(newtasks)
        }
    }
    function movedown(index){
        const newtasks = [...tasks]
        if (index < newtasks.length - 1) {
            const newtasks = [...tasks]
            let temp = newtasks[index]
            newtasks[index] = newtasks[index + 1]
            newtasks[index + 1] = temp
            setTasks(newtasks)
        }
    }
    return (
        <>
            <div className="Todo-list">
                <div>
                    <input type='text' placeholder='Enter Task...' className="inputdec" value={textinput} onChange={handletextinput}/>
                    
                    <button className="inputbut" onClick={addtasks}>Add Task</button>
                </div>
                
                <ul>
                    {tasks.map((task, index) =>
                        <li key={index}>
                            <span className="todotext">{task}</span>
                            <button className="delete-button" onClick={() => deletetasks(index)}>Delete</button>
                            <button className="move-button" onClick={() => moveup(index)}>Up</button>
                            <button className="move-button" onClick={() => movedown(index)}>Down</button>
                        </li>
                        
                    )}
                </ul>
            </div>
           
        </>
    );
}
export default Todolist;
