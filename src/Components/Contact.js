import React from 'react'
import Facebook from '../images/facebook-logo.png'
import Twitter from '../images/twitter.png'
import Instagram from '../images/instagram.png'
import Behance from '../images/behance.png'
import Basket from '../images/dribbble-logo.png'
const Contact = () => {
    return (
        <div>
            <div>
                <div className="contact_bg">
                 <div class="overlay"></div>
                 <div className="title_container">
                  <div className="contact_title">
                     <p class="wow animate__fadeInUp" >CONTACT US</p>
                     <h1 class="wow animate__fadeInUp" >Reach out for a new project or just say hello</h1>
                  </div>
                 </div>
                 <div className="contact_main_container wow animate__fadeInUp">
                   <div className= "contact_container_inner">
                       <div className="contact_width wow animate__fadeInUp">
                           <div className="contact_first_panel">
                               <div className="contact_first_panel_inner wow animate__fadeInRight">
                                   <form>
                                   <p className="send_message">SEND US A MESSAGE</p>
                                   <input type="text" className="first_input" placeholder="Your Name" required/>
                                   <input type="email" className="second_input" placeholder="Your Email" required/>
                                   <input type="text" className="third_input" placeholder="Subject" required/>
                                   <textarea placeholder="Your Message" required></textarea>
                                   <button type="submit" className="button_submit">SUBMIT</button>
                                   </form>
                                   
                               </div>
                           </div>
                           <div className="contact_second_panel">
                               <div className="contact_first_panel_inner">
                                 <p className="send_message">CONTACT INFO</p>
                                 <div>
                                     <p className="find">Where to Find Us</p>
                                     <p className="street">1600 Amphitheatre Parkway</p>
                                     <p className="region">Mountain View, CA</p>
                                     <p className="adress">94043 US</p>
                                 </div>
                                 <div>
                                     <p className="email_us">Email Us At</p>
                                     <p className="current_mail">contact@glintsite.com</p>
                                     <p className="info_site">info@glintsite.com</p>
                                 </div>
                                 <div>
                                     <p className="call_us">Call Us At</p>
                                     <p className="phone">Phone: (+63) 555 1212</p>
                                     <p className="mobile">Mobile: (+63) 555 0100</p>
                                     <p className="fax">Fax: (+63) 555 0101</p>
                                 </div>
                                 <div className="contact_icons">
                                     <img src={Facebook}/>
                                     <img src={Twitter}/>
                                     <img src={Instagram}/>
                                     <img src={Behance}/>
                                     <img src={Basket}/>
                                 </div>
                               </div>
                           </div>
                       </div>
                   </div>
                 </div>
                 
                </div>
            </div>
        </div>
    )
}

export default Contact
