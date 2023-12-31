import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../../components/Hotels/HotelDetails.css";
import axios from "axios";

export default function HotelDetails() {
  const [hotel, setHotel] = useState();

  const [bookDate, setBookDate] = useState("");
  const [leaveDate, setLeaveDate] = useState("");
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);

  const { hotelId } = useParams();

  useEffect(() => {
    async function getHotelData(hotelId) {
      try {
        const res = await axios.get(`https://la-reserve-server.onrender.com/hotels/${hotelId}`);

        if (res.status === 200) {
          setHotel(res.data.data);
          return;
        }

        throw new Error("Error occurred when fetching hotel data.");
      } catch (err) {
        console.error(err);
      }
    }
    getHotelData(hotelId);
  }, []);

  const handleCheckout = async () => {
    if (validateForm()) {
      const amountOfDays = findDaysDifference(leaveDate, bookDate);
      const res = await axios.post(
        "https://la-reserve-server.onrender.com/create-checkout-session",
        { hotelId, amountOfDays }
      );

      if (res.status === 200) {
        const redirectUrl = res.data.session.url;
        window.location.replace(redirectUrl);
      }
    } else {
      console.error("All form inputs should be filled out.");
    }
  };

  const validateForm = () => {
    // Validate form inputs
    if (!bookDate || !leaveDate || !location) {
      alert("Please select all booking details.");
      return false;
    }

    const currentDate = new Date();
    const selectedBookDateTime = new Date(`${bookDate}T00:00:00`);
    const selectedLeaveDateTime = new Date(`${leaveDate}T00:00:00`);

    // Check if booking time is in the past
    if (selectedBookDateTime < currentDate) {
      alert("Booking time cannot be in the past.");
      return false;
    }

    // Check if booking time is after leaving time
    if (selectedBookDateTime >= selectedLeaveDateTime) {
      alert("Booking time must be before leaving time.");
      return false;
    }

    return true;
  };

  const findDaysDifference = (leaveDateInput, bookDateInput) => {
    // Step 1: Parse date strings into Date objects
    const leaveDate = new Date(leaveDateInput);
    const bookDate = new Date(bookDateInput);

    // Step 2: Calculate the time difference in milliseconds
    const timeDifferenceInMilliseconds = leaveDate - bookDate;

    // Step 3: Convert to the desired unit (optional)
    // For example, to get the difference in days, divide by the number of milliseconds in a day
    const millisecondsInADay = 1000 * 60 * 60 * 24;
    const timeDifferenceInDays =
      timeDifferenceInMilliseconds / millisecondsInADay;
    return timeDifferenceInDays;
  };

  return (
    <section className="px-10 py-2">
      {hotel && hotelId ? (
        <section className="reservation-form__container">
          <div className="image__container">
            <img src={hotel.image} alt={hotel.name} />
          </div>
          <form>
            <h1 className="header__h1">{hotel.name}</h1>
            <h2 className="header__h2">{hotel.location}</h2>
            <h3>${hotel.price}</h3>
            <div className="dates__container">
              <div className="input__container">
                <label htmlFor="book-date" className="text-xs font-bold">
                  CHECK IN
                </label>
                <input
                  type="date"
                  name="book-date"
                  min={new Date().toISOString().split("T")[0]}
                  id="book-date"
                  onChange={(e) => setBookDate(e.target.value)}
                  value={bookDate}
                />
              </div>
              <div className="input__container">
                <label htmlFor="leave-date" className="text-xs font-bold">
                  CHECK OUT
                </label>
                <input
                  type="date"
                  name="leave-date"
                  min={bookDate}
                  id="leave-date"
                  onChange={(e) => setLeaveDate(e.target.value)}
                  value={leaveDate}
                />
              </div>
            </div>

            <div className="people__container">
              <div className="input__container">
                <label htmlFor="adults" className="text-xs font-bold">
                  ADULTS
                </label>
                <select
                  onChange={(e) => setAdults(Number(e.target.value))}
                  name="adults"
                  id="adults"
                  value={adults}
                >
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                  <option value={5}>5</option>
                  <option value={6}>6</option>
                  <option value={7}>7</option>
                  <option value={8}>8</option>
                  <option value={9}>9</option>
                  <option value={10}>10</option>
                  <option value={11}>11</option>
                  <option value={12}>12</option>
                </select>
              </div>
              <div className="input__container">
                <label htmlFor="children" className="text-xs font-bold">
                  CHILDREN
                </label>
                <select
                  onChange={(e) => setChildren(Number(e.target.value))}
                  name="children"
                  id="children"
                  value={children}
                >
                  <option value={0}>0</option>
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                  <option value={5}>5</option>
                  <option value={6}>6</option>
                  <option value={7}>7</option>
                  <option value={8}>8</option>
                </select>
              </div>
            </div>

            <button
              onClick={handleCheckout}
              id="book-reservation-btn"
              className="book-reservation-btn"
              type="button"
            >
              Reserve
            </button>
          </form>
        </section>
      ) : (
        "Loading..."
      )}
    </section>
  );
}
