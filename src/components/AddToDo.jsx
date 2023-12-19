import { useState } from "react";
import { Button, Form } from "react-bootstrap";

import { addToDo } from "./redux/todo";
import { useDispatch } from "react-redux";

const AddToDo = () => {
  const [todo, setTodo] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTodo = {
      id: Math.floor(Math.random() * 9999999 + 1000000),
      name: todo,
      isDone: false,
      createAt: new Date().toLocaleString(),
    };
    dispatch(addToDo(newTodo));
    setTodo('')
  };

  return (
    <Form className="d-flex gap-2" onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Control
          required
          type="text"
          placeholder="To do"
          defaultValue="Learning"
          onChange={(e) => setTodo(e.target.value)}
        />
      </Form.Group>
      <Form.Group>
        <Button type="submit">Add</Button>
      </Form.Group>
    </Form>
  );
};

export default AddToDo;
