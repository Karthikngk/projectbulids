import React,{ useState } from "react";
import "./LoginScreen.css";
import SignupScreen from "./SignupScreen";
import { auth } from "../firebase";

function LoginScreen() {
  
const [signIn , setSignIn] = useState(false);

  
  return (
    <div className="LoginScreen">
      
      <div className="LoginScreen__background">
        <img className="LoginScreen__logo"
         src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Logonetflix.png/1200px-Logonetflix.png" alt=""/>
        
        <button onClick={() => setSignIn(true)}
         className="LoginScreen__button"> Sign in</button>

        <div className="LoginScreen__gradient">  
        </div>
        
        <div className="LoginScreen__body"> 
        {signIn ? (
          <SignupScreen/>
        ) :( 
      
        
        <>
         <h1> Unlimited films, TV programmes and
           more.  </h1>
          <h2> Watch anywhere. Cancel at any time. </h2>
          <h3>  Ready to watch Enter your email id to create or restart your membership</h3>
          <div className="LoginScreen__input">
            <form> 
              <input type ="email"
              placeholder="Email Address"/>
              <button onClick= { () => setSignIn(true)}
              className="LoginScreen__getstarted" > GET STARTED</button>
            </form>
          </div> 
        
        </>
        )}
         </div>
         </div>
         </div>
       
      
     
  );
}
export default LoginScreen;