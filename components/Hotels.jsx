import React from "react";
import { useState } from "react";
import "./Hotels.css";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";

const firebaseConfig = {
  //...
};

const app = initializeApp(firebaseConfig);

const [bookDate, setBookDate] = useState('');
const [bookTime, setBookTime] = useState('');
const [leaveDate, setLeaveDate] = useState('');
const [leaveTime, setLeaveTime] = useState('');


const Hotels = () => {
  return (
    <div className="container">
      <div className="content">
        <div className="txt">Book Now</div>
        <div className="form">
          <div className="txt">Select Date & Time you would like to stay</div>
          <form>
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
            name="" 
            id="leave-time" 
            onChange={(e) => setLeaveTime(e.target.value)}
            />
            </div>
            <div className="book">
              <button type="submit">Book</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Hotels;
