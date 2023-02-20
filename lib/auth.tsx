import { auth } from '@/firebase/client';
import { GithubAuthProvider, signInWithPopup, signOut, User } from '@firebase/auth';


export const signInWithGithub = async () => {
  const provider = new GithubAuthProvider()
  return signInWithPopup(auth, provider).then((result) => {
    const user: User = result.user
    alert(`${user}さんこんにちは。`)
    console.log(user.uid);
  })
    .catch((e) => console.log(e))

}

export const logout = async () => {
  return signOut(auth).then((auth) => {
    alert("conplete signout")
  })
}