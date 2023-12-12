import React from 'react'

const TodoItem = ({title, description, isCompleted, updateHandler, id, 
    deleteHandler}) => {

      const [isCheckedInternal, setIsCheckedInternal] = useState(true);

      useEffect(()=>{
        isCheckedInternal = isCompleted;
      },  [isCompleted]);

      function sample(id) {
        isCheckedInternal = !isCheckedInternal;
        updateHandler(id);

      }

  return (
    <div className="todo">
      <div>
<h4>{title}</h4>
<p>{description}</p>
      </div>
      <div>
        <input onChange={()=>sample(id)} type="checkbox" checked={isCheckedInternal}/>
        <button onClick={()=>deleteHandler(id)} className="btn">Delete</button>
      </div>
    </div>
  )
}

export default TodoItem