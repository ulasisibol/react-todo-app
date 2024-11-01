import { useState } from 'react';
import styled from 'styled-components';
import { Button, Form } from 'react-bootstrap';

// Styled components


const StyledForm = styled(Form)`
  border: 1px solid black;
  margin: 20px auto;
  margin: 15% 15% 0 15%;
  justify-content: center;
  display: flex;
  border-radius: 10px;
`;
const StyledLabel = styled(Form.Label)`
  margin: 20px;
  font-size: 1.5rem;
  
`;

const StyledInput = styled(Form.Control)`
  width: 200px;
  margin: 20px;
  font-size: 1rem;
`;

const StyledButton = styled(Button)`
  width: 100px;
  margin: 20px;
  font-size: 1rem;
`;

const TodoList = styled.ul`
  list-style: none;
  padding: 0;
  max-width: 400px;
  margin: 20px auto;
`;

const TodoItem = styled.li`
  background-color: #f9f9f9;
  padding: 10px;
  margin: 5px 0;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #e0e0e0;
  }
`;

function App() {
  const [todoInput, setTodoInput] = useState("");
  const [todos, setTodos] = useState([]);

  function addTodo() {
    if (todoInput.trim()) {
      setTodos([...todos, { id: todos.length, name: todoInput }]);
      setTodoInput('');
    }
  }

  function removeTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  const listTodos = todos.map(todo => (
    <TodoItem onClick={() => removeTodo(todo.id)} key={todo.id}>
      {todo.name}
    </TodoItem>
  ));

  console.log(todos);
  return (
    <>
    
      <StyledForm>
        <StyledLabel htmlFor="hedef">Hedef: </StyledLabel>
        <StyledInput
          type="text"
          value={todoInput}
          onChange={(text) => setTodoInput(text.target.value)}
        />
        <StyledButton onClick={addTodo}>Ekle</StyledButton>
      </StyledForm>

      <TodoList>{listTodos}</TodoList>
    </>
  )
}

export default App;
