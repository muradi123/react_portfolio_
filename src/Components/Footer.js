import React from 'react'

const Footer = () => {
    return (
        <div className="footer_container">
            <div className="footer_inner">
                <div className="footer_first_section wow animate__fadeInLeft">
                    <img src="https://preview.colorlib.com/theme/glint/images/logo-footer.png.webp"/>
                    <p> Proin eget tortor risus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Nulla porttitor accumsan tincidunt. Nulla porttitor accumsan tincidunt. Quaerat voluptas autem necessitatibus vitae aut.</p>
                </div>
                <div className="footer_second_section wow animate__fadeInRight">
                    <p className="notified">Get Notified</p>
                    <p className="footer_text">Quia quo qui sed odit. Quaerat voluptas autem necessitatibus vitae aut non alias sed quia. Ut itaque enim optio ut excepturi deserunt iusto porro.</p>
                    <form id="mc-form"  > 
                    <input type="text" class="" id="mc-email" placeholder="Your Name" required="" autoComplete="off"></input>
                    <button className="subscribe">SUBSCRIBE</button>
                    </form>
                </div>
            </div>
            <p className="write_date">© Copyright Glint 2021</p>
        </div>
    )
}

export default Footer
