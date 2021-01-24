import React, {useState} from "react"
import { Link } from 'gatsby';
import { navigate } from "@reach/router";
import "./layout.scss";
import { auth } from '../modules/Firebase/firebase';
import { signOut } from '../modules/Authentication/auth';

const Layout = ({ children }: any) => {
  type UserState = Object | undefined;
  const [user, setUser] = useState<UserState>(undefined)

  auth.onAuthStateChanged(
    user => {
      if (user) {
        console.log(user.uid, user.email)
        setUser(user)
      } else {
        setUser(undefined);
      }
    }
  )

  const handleSignOut = (e) => {
    e.preventDefault();
    signOut();
    navigate('/');
  }

  return (
    <>
      <header>
        <Link to="/">Home</Link>
        <Link to="/signup">Sign Up</Link>
        <Link to="/signin">Sign In</Link>
        {user ? (
          <div>
            <Link to="/profile">Profile</Link> 
            <button onClick={handleSignOut}>Sign Out</button>
          </div>
        ): '' }
        
      </header>
      <main>{children}</main>

    </>
  )
}

export default Layout
