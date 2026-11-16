import {useState} from 'react';
import { useEffect } from 'react';



function App() {
  const [todos, setTodos] = useState([
  {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  },
  {
    "userId": 1,
    "id": 2,
    "title": "quis ut nam facilis et officia qui",
    "completed": true
  },
  {
    "userId": 1,
    "id": 3,
    "title": "fugiat veniam minus",
    "completed": false
  },
  {
    "userId": 1,
    "id": 4,
    "title": "et porro tempora",
    "completed": true
  },
  {
    "userId": 1,
    "id": 5,
    "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
    "completed": false
  }])

  function onToggleCompleted(id) {
    setTodos(
      todos.map(
        (todo) => todo.id === id ? {...todo, completed: !todo.completed} : todo
      )
    )
  }

  function deleteTodo(id) {
    console.log("delete", id)
    setTodos(
      todos.filter(
        (todo) => todo.id !== id
      )
    )

  }




  return (
    <div className="appp">
      <Header />
      {/* <AddTodo /> */}
      <Section>
        <p class="count">x todos, x done</p>

        <TodoList todos={todos} onToggle={onToggleCompleted} onDelete={deleteTodo}/>

      </Section>
      
    </div>
  );
}

function Header() {
  return (
    <header class="header">
      <h1>Evening todos</h1>
      <p class="subtitle">Settle in and sort out what's left for today.</p>
    </header>
  )
}

// function AddTodo() {
//   return (
//     <form class="add-form" aria-label="Add a todo">
//       <div class="field field-title">
//         <label for="title">Title</label>
//         <input id="title" name="title" type="text" placeholder="Water the plants" required />
//       </div>

//       <div class="field field-user">
//         <label for="userId">User ID</label>
//         <input id="userId" name="userId" type="number" min="1" value="1" required />
//       </div>

//       <label class="check" for="completed">
//         <input id="completed" name="completed" type="checkbox" />
//         <span class="check-box" aria-hidden="true"></span>
//         Already done
//       </label>

//       <button type="submit" class="btn">Add todo</button>
//     </form>
//   )
// }

function Section({children}) {
  return (
    <section aria-label="Todo list">
      {children}
    </section>
  )
}

function TodoList ({todos, onToggle, onDelete}) {
  return (
    <>
      <ul class="todo-list">
        {todos.map(
          (todo) => (<Todo key={todo.id} todo={todo} onToggle={onToggle} onDelete={onDelete}/>)
        )}
      </ul>
    </>
  )
}

function Todo ({todo, onToggle, onDelete}) {

  return (
    <li class={`todo ${todo.completed ? "is-done" : ""}`}>

      <div onDoubleClick={(() => onToggle(todo.id))} class="todo-body">
        <p class="todo-title">{todo.title}</p>
        <p class="todo-meta"><span class="badge">{todo.userId}</span><span class="badge">{todo.id}</span></p>
      </div>
      <button onClick={(() => onDelete(todo.id))} class="icon-btn" aria-label="Delete todo">&times;</button>
    </li>
  )
}

export default App;
