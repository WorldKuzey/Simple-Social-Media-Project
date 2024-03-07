import {auth,provider} from '../config/firebase'
import {signInWithPopup} from 'firebase/auth'
import {useNavigate} from"react-router-dom"


export const Login=()=>{
   
   const navigate = useNavigate();
   const signInWithGoogle=async()=>{

   const result = await signInWithPopup(auth,provider)
   console.log(result);
   navigate("/");
//    In the provided code snippet, signInWithGoogle is an asynchronous function that uses await to wait for the signInWithPopup function to complete its execution before proceeding further. This ensures that the code within the function waits for the authentication process to finish before logging the result to the console.
   }
    return (
    
    <div>
        <p>Sign In With Google To Continue</p>
        <button onClick={signInWithGoogle}>Sign In With Google </button>
    </div>)
}