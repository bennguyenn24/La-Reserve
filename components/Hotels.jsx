import React from 'react'
import { useState } from 'react'
import './Hotels.css'

const Hotels = () => {
  return (
    <div className="container">
        <div className="content">
            <div className="txt">Book Now</div>
            <div className="form">
                <div className="txt">Select Date & Time you would like to stay</div>
            <form>
            <div className="inputData">
                    <input type="date" name="" id="book-date" />
                </div>
                <div className="inputData">
                    <input type="time" name="" id="book-date" />
                </div>
                <div className="txt">Select Date & Time you would like to leave.</div>
                <div className="inputData">
                    <input type="date" name="" id="leave-date" />
                </div>
                <div className="inputData">
                    <input type="time" name="" id="leave-time" />
                </div>
                <div className="book">
                    <button type='submit'>Book</button>
                </div>
            </form>
            </div>
        </div>
    </div>
  )
}

export default Hotels