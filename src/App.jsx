import "./App.css";
import SignUpForm from "../components/signupForm";
import Hotels from "../components/Hotels";
import { useState } from "react";

export default function App() {
const [ signedUp , setSignedUp ] = useState(false);
console.log(signedUp)
  return (
    <>
      <div className="App">
      {!signedUp ? (
        <SignUpForm setSignedUp={setSignedUp} />
      ) : (
        <Hotels />
      )}
      </div>
    </>
  );
}
