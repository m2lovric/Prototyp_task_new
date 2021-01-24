import { auth } from '../Firebase/firebase';

export const createUser = (email: string, password: string) => auth.createUserWithEmailAndPassword(email, password);

export const signOut = () => auth.signOut().then(() => {
    console.log('Signed out');
  }).catch((error) => {
    console.log('err', error);
  });

export const signIn = (email: string, password: string) => auth.signInWithEmailAndPassword(email, password);