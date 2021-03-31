import React, { useEffect, useState } from 'react';
import Form from './components/Form';
import Header from './components/Header';
import Layout from './components/Layout';
import Lists from './components/Lists';

const App = () => {
  const [todo, setTodo] = useState(''),
    [todoList, setTodoList] = useState([]),
    [error, setError] = useState(null);

  //get todo list from storage

  useEffect(() => {
    const getTodoList = JSON.parse(localStorage.getItem('todoList'));

    if (getTodoList) {
      setTodoList(getTodoList);
    }
  }, []);

  //Save todo to local storage
  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(todoList));
  }, [todoList]);

  const submitHandler = e => {
    e.preventDefault();
    if (!todo.trim().length) {
      setError(`Field can't be empty`);
      setTodo('')
      return false;
    }

    setTodoList([{ id: Date.now(), title: todo, done: false }, ...todoList]);
    setError(null);
    setTodo('');
  }

  const deleteHandler = toDoId => {
    if (window.confirm('Are you sure you want to delete?')) {
      const updatedTodoList = todoList.filter(todo => todo.id !== toDoId);
      setTodoList(updatedTodoList);
    }
  }

  const doneHandler = toDoId => {
    const index = todoList.findIndex(item => item.id === toDoId);
    const duplicateTodoList = [...todoList];

    duplicateTodoList[index] = {
      id: todoList[index].id,
      title: todoList[index].title,
      done: !todoList[index].done
    }

    setTodoList(duplicateTodoList);
  }

  return (
    <ListContext.Provider value={{ doneHandler, deleteHandler }}>
      <Layout>
        <Header />
        <Form
          todo={todo}
          change={e => setTodo(e.target.value.trim())}
          submit={submitHandler}
          error={error}
        />
        <Lists todoList={todoList} />
      </Layout>
    </ListContext.Provider>
  );
}

export const ListContext = React.createContext();
export default App;
