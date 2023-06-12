import './App.css'
import logo from './assets/components/logo.png'
import {faUser} from '@fortawesome/free-solid-svg-icons'

export default function App() {

  return (
    <>
      <div className='App'>
        <div className='wrapper'></div>
        <div className='content'>
      <div className='logo'>
        <img src={logo} alt="" />
      </div>
      <div className='offer1'>
        <span>
        Become a member of La Réserve today to receive exclusive offers and great deals!
        </span>
        </div>
        <div className="form">
          <form action="#">
            <div className="email-input">
            {/* <FontAwesomeIcon icon={faUser} /> */}
            <input type="text" id="input" placeholder='Enter Email Address' />
            </div>
            <div className="password-input">
            {/* <FontAwesomeIcon icon={faUser} /> */}
            <input type="text" id="input" placeholder='Password' />
            </div>
            <div className="submit">
              <button>Submit</button>
            </div>
          </form>
        </div>
        </div>
   </div>
    </>
  )
}
