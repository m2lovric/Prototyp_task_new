import React, {useEffect} from 'react';
import Layout from "../components/layout"
import { useSelector, useDispatch } from 'react-redux'

const IndexPage = () => {

  const dispatch = useDispatch();
  const counter = useSelector(state => state)

  return (
    <Layout>
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>{counter}</p>
      <button onClick={() => dispatch({type: 'INCREMENT'})}>Increment</button>
    </Layout>
  )
}

export default IndexPage
