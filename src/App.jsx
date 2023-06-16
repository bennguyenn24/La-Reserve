import "./App.css";
import SignUpForm from "../components/signupForm";
import BookingForm from "../components/BookingForm";
import { useState } from "react";

export default function App() {
const [ signedUp , setSignedUp ] = useState(false);

  return (
    <>
      <div className="App">
      {!signedUp ? (
        <SignUpForm setSignedUp={setSignedUp} />
      ) : (
        <BookingForm />
      )}
      </div>
    </>
  );
}
