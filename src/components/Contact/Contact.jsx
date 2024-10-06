import React from 'react'
import './Contact.css'
import msg_icon from'../../assets/msg-icon.png'
import mail_icon from'../../assets/mail-icon.png'
import phn_icon from'../../assets/phone-icon.png'
import location_icon from'../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'



const Contact = () => {

    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "5e31a5e3-9b6b-41ac-a707-d558bdca83fa");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };





  return (
    <div className='contact'>
      <div className="contact-col">
    <h3>Send us a message  <img src={msg_icon} alt="" /></h3>
    <p> Feel free to reach out throug contact form or find 
        our contact information below. Your feedback , questions ,
         and suggestion are important to us as we strive to provide 
         exceptional service to our university community.</p>
   <ul>
    <li> <img src={mail_icon} alt="" />Contact@Edusity.com </li>
    <li> <img src={phn_icon} alt="" />+987 765 4321 </li>
    <li> <img src={location_icon} alt="" />77 Massachusets Ave, Cambridge <br/>
    MA 02139 , USA </li>
  </ul>
   
    </div>
    <div className='contact-col'>
        <form onSubmit={onSubmit} >
            <label >Your name</label>
            <input type="text" name="name" placeholder='Enter Your name' required/>
            <label >Phone Number</label>
            <input type="tel" name='phone ' placeholder='Enter your mobile number' required/>
            <label > Write your message here</label>
            <textarea name="message" rows="6 " placeholder='Enter your message' required></textarea>
            <button type='submit' className='btn dark-btn' > Submit now <img src={white_arrow} alt="" /></button>
        </form>
        <span>{result}</span>
    </div>
    </div>
  )
}

export default Contact
