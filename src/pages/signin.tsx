import React, {useState} from 'react';
import Layout from '../components/layout';
import { signIn } from '../modules/Authentication/auth';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    signIn(email, password);
    setEmail('');
    setPassword('');
  }
  return (
    <Layout>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Sign In</button>
      </form>
    </Layout>
  )
}

export default SignIn;