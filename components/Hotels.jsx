import React from "react";
import { useState } from "react";
import "./Hotels.css";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);

const [bookDate, setBookDate] = useState("");
const [bookTime, setBookTime] = useState("");
const [leaveDate, setLeaveDate] = useState("");
const [leaveTime, setLeaveTime] = useState("");

const handleSubmit = (e) => {
    e.preventDefault();

    if (bookDate === "" || leaveDate === ""){
        alert('Please select both book date and leave date.');
        return;
    }
    if (bookTime === "" || leaveTime === "") {
        console.log("Please select both book time and leave time.");
        return;
      }
}

const Hotels = () => {
  return (
    <div className="container">
      <div className="content">
        <div className="txt">Book Now</div>
        <div className="form">
          <div className="txt">Select Date & Time you would like to stay</div>
          <form onSubmit={handleSubmit}> 
            <div className="inputData">
              <input
                type="date"
                name="book-date"
                id="book-date"
                onChange={(e) => setBookDate(e.target.value)}
              />
            </div>
            <div className="inputData">
              <input
                type="time"
                name="book-time"
                id="book-time"
                onChange={(e) => setBookTime(e.target.value)}
              />
            </div>
            <div className="txt">
              Select Date & Time you would like to leave.
            </div>
            <div className="inputData">
              <input
                type="date"
                name="leave-date"
                id="leave-date"
                onChange={(e) => setLeaveDate(e.target.value)}
              />
            </div>
            <div className="inputData">
              <input
                type="time"
                name="leave-time"
                id="leave-time"
                onChange={(e) => setLeaveTime(e.target.value)}
              />
            </div>
            <div className="book">
              <button id="book-reservation-btn" type="submit" onSubmit={handleSubmit}>Book</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Hotels;
