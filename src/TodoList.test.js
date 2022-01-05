import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import TodoList from './TodoList';

//smoke test
it('renders without crashing', function() {
    render(<TodoList />);
});

it('matches snapshot', function() {
    const {asFragment} = render(<TodoList />);
    expect(asFragment()).toMatchSnapshot();
});

it("can add a new todo", function() {
    const { getByPlaceholderText, queryByText } = render(<TodoList />);
  
    // no todos yet
    expect(queryByText("wash car")).not.toBeInTheDocument();
  
    const todoInput = getByPlaceholderText("Enter Task");
    const submitBtn = queryByText("Add Todo")
  
    // fill out the form
    fireEvent.change(todoInput, { target: { value: "wash car" }});
    fireEvent.click(submitBtn);
  
    // todo exists!
    expect(queryByText("wash car")).toBeInTheDocument();
  });

  it("can remove todo", function() {
    const { getByPlaceholderText, queryByText } = render(<TodoList />);
  
    // no todos yet
    expect(queryByText("wash car")).not.toBeInTheDocument();
  
    const todoInput = getByPlaceholderText("Enter Task");
    const submitBtn = queryByText("Add Todo")
  
    // fill out the form
    fireEvent.change(todoInput, { target: { value: "wash car" }});
    fireEvent.click(submitBtn);
  
    // todo exists!
    expect(queryByText("wash car")).toBeInTheDocument();

    const remove = queryByText('X');

    fireEvent.click(remove);

    expect(queryByText('wash car')).not.toBeInTheDocument();
  });