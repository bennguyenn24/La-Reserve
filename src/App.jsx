import "./App.css";
import SignUpForm from "../components/signupForm";
import Hotels from "../components/Hotels";
import { useState } from "react";

const [ signedup , setSignedUp ] = useState(false);
const handleSignUp = () => {
  // Perform sign-up logic
  // ...

  // Set signedUp to true once sign-up is successful
  setSignedUp(true);
};


export default function App() {
  return (
    <>
      <div className="App">
      {!signedUp ? (
        <SignUpForm onSignUp={handleSignUp} />
      ) : (
        <Hotels />
      )}
      </div>
    </>
  );
}
