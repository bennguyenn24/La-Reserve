import "./App.css";
import SignUpForm from "../components/SignUpForm";
import BookingForm from "../components/BookingForm";
import BookHotel from "../components/BookHotel";
import { useState } from "react";

export default function App() {
const [ signedUp , setSignedUp ] = useState(false);

  return (
    <>
      <div className="App">
       <BookHotel />
      {!signedUp ? (
        <SignUpForm setSignedUp={setSignedUp} />
      ) : (
        <BookingForm />
      )}
      </div>
    </>
  );
}
