import {useState} from 'react';
import { useEffect } from 'react';

function App() {


  return (
    <div className="appp">
      <Header />
      <AddTodo />
      <section aria-label="Todo list">
        <p class="count">x todos, x done</p>
        <ul class="todo-list">

          <li class="todo">
            <label class="check">
              <input type="checkbox" aria-label="Mark complete" />
              <span class="check-box" aria-hidden="true"></span>
            </label>
            <div class="todo-body">
              <p class="todo-title">Water the plants</p>
              <p class="todo-meta"><span class="badge">User 1</span><span class="badge">ID 1</span></p>
            </div>
            <button class="icon-btn" aria-label="Delete todo">&times;</button>
          </li>


          <li class="todo is-done">
            <label class="check">
              <input type="checkbox" checked aria-label="Mark incomplete" />
              <span class="check-box" aria-hidden="true"></span>
            </label>
            <div class="todo-body">
              <p class="todo-title">Brew a pot of tea</p>
              <p class="todo-meta"><span class="badge">User 1</span><span class="badge">ID 2</span></p>
            </div>
            <button class="icon-btn" aria-label="Delete todo">&times;</button>
          </li>


        </ul>
      </section>
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

function AddTodo() {
  return (
    <form class="add-form" aria-label="Add a todo">
      <div class="field field-title">
        <label for="title">Title</label>
        <input id="title" name="title" type="text" placeholder="Water the plants" required />
      </div>

      <div class="field field-user">
        <label for="userId">User ID</label>
        <input id="userId" name="userId" type="number" min="1" value="1" required />
      </div>

      <label class="check" for="completed">
        <input id="completed" name="completed" type="checkbox" />
        <span class="check-box" aria-hidden="true"></span>
        Already done
      </label>

      <button type="submit" class="btn">Add todo</button>
    </form>
  )
}

export default App;
