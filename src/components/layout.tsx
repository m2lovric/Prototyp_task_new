import React, { useState } from "react"
import { Link } from 'gatsby';
import { navigate } from "@reach/router";
import { useDispatch } from 'react-redux';
import { auth } from '../modules/Firebase/firebase';
import { signOut } from '../modules/Authentication/auth';

const Layout = ({ children }: any) => {
  type UserState = Object | string;
  const [user, setUser] = useState<UserState>('');
  const dispatch = useDispatch();

  auth.onAuthStateChanged(
    user => {
      if (user) {
        console.log(user.uid, user.email)
        setUser(user)
        dispatch({ type: 'AddUser', payload: user.uid })
      } else {
        setUser('');
        dispatch({ type: 'RemoveUser', payload: user })
      }
    }
  )

  const handleSignOut = (e: React.MouseEvent) => {
    e.preventDefault();
    signOut();
    navigate('/');
  }

  return (
    <section className="content">
      <div className="glass"></div>
      <header>
        <Link to="/">Home <div className="bottomLine"></div></Link>
        <Link to="/signup">Sign Up <div className="bottomLine"></div></Link>
        <Link to="/signin">Sign In <div className="bottomLine"></div></Link>
        {user ? (
          <>
            <Link to="/profile">Profile<div className="bottomLine"></div></Link>
            <button onClick={handleSignOut}>Sign Out</button>
          </>
        ) : ''}

      </header>
      <main className="index">{children}</main>

    </section>
  )
}

export default Layout
