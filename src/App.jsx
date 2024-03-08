import React from 'react'
import { useReducer } from 'react'; 
import { reducer , initialTodos } from './Reducer/AllReducers';


const App = () => {
   
    const [todos, dispatch] = useReducer(reducer, initialTodos);
  
    const handleComplete = (todo) => {
      dispatch({ type: "COMPLETE", id: todo.id });
    };
  
    return (
      <>
        {todos.map((todo) => (
          <div key={todo.id}>
            <label>
              <input
                type="checkbox"
                checked={todo.complete}
                onChange={() => handleComplete(todo)}
              />
              {todo.title}
            </label>
          </div>
        ))}
      </>
    );
  }
  

 
export default App
