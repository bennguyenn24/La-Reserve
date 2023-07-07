// import "./App.css";
// import NoPage from "./routes/404";
// import Checkout from "../components/Checkout";
// import { useState } from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./routes/root";
// import Navbar from "../components/Navbar";
// import MobileNavbar from "../components/MobileNavbar";
// import HotelDetails from "./routes/HotelDetails";

// export default function App() {
//     const [bookingComplete, setBookingComplete] = useState(false);

//     return (
//         <div className="App">
//             <BrowserRouter>
//                 <Navbar />
//                 <Routes>
//                     <Route
//                         path="/"
//                         element={
//                             <Home setBookingComplete={setBookingComplete} />
//                         }
//                     />
//                     <Route path="/hotels/:hotelId" component={<HotelDetails />} />
//                     <Route path="/checkout" element={<Checkout />} />
//                     <Route path="*" element={<NoPage />} />
//                 </Routes>
//                 <MobileNavbar />
//             </BrowserRouter>
//         </div>
//     );
// }
