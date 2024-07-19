import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css'


export default function Home() {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
  
    const handleInputChange = (e) => {
      setPhoneNumber(e.target.value);
    };
  
    const handleSubmit = () => {
      if (phoneNumber.length === 0) {
        setError('The number you have entered is not correct, please check the number and try again');
      } else {
        navigate('/Next',{ replace: true });
        setError('');
      }
    };
  return (
    
    <div className="container">
      <div className="step-indicator">
        <div>STEP 1/2</div>
      </div>
      <div className="phone-entry">
        {/* <div className="phone-icon">
          <img src="./src/writing.png" alt="Phone Icon" />
        </div> */}
        <div className="input-container">
          <label htmlFor="phone-number">Enter your phone number</label>
          <div className="phone-input">
            <span className="country-code">+91</span>
            <input
              id="phone-number"
              type="tel"
              value={phoneNumber}
              onChange={handleInputChange}
            />
          </div>
          {error && <div className="error-message">{error}</div>}
        </div>
      </div>
      <button className="continue-button" onClick={handleSubmit}>
        CONTINUE
      </button>
    </div>
  )
}
