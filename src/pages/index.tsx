import React from 'react';
import Layout from "../components/layout"
import ToDoList from "../components/ToDoList"
import { useSelector, useDispatch } from 'react-redux'

const IndexPage = () => {

  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);

  return (
    <Layout>
      <ToDoList />
    </Layout>
  )
}

export default IndexPage
