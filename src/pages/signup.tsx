import React, { useState } from 'react';
import Layout from '../components/layout';
import { createUser } from '../modules/Authentication/auth';


const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    createUser(email, password);
    setEmail('');
    setPassword('');
  }

  return (
    <Layout>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">E-mail: </label>
        <input type="email" name="email" value={email} onChange={e => setEmail(e.target.value)} />
        <label htmlFor="password">Password: </label>
        <input type="password" name="password" value={password} onChange={e => setPassword(e.target.value)} />
        <button type="submit">SignUp</button>
      </form>
    </Layout>
  )
}

export default SignUp;