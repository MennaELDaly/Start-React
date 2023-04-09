import React from 'react'

export default function Contact() {
  return (
    <section className="masthead page-section bg-white text-black mb-0 py-5 " id="about">
      <div className="container">
          
        <div className="row justify-content-center">
            <div className="col-lg-8">

              {/* <!-- About Section Heading--> */}
                <h2 className="page-section-heading text-center">CONTACT ME</h2>
                
                {/* <!-- Icon Divider--> */}
                <div className='divider-custom divider-light'>
                    <div className='divider-custom-line'></div>
                    <div className="divider-custom-icon"><i className="fas fa-star fa-2x "></i> </div>
                    <div className="divider-custom-line"></div>
                </div>
                <form >

                  <div className="form-floating mb-3">
                    <input type="text" className="form-control border-0 border-bottom rounded-0" id="Name" required="required" placeholder="Name"/>
                    <label  htmlFor="Name" className=" text-success">Name</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input type="email" className="form-control border-0 border-bottom rounded-0" id="floatingInput" required="required" placeholder="name@example.com"/>
                    <label htmlFor="floatingInput"  className=" text-success">Email Address</label>
                  </div>

                  <div className="form-floating mb-3">
                    <input type="tel" className="form-control border-0 border-bottom rounded-0" id="phone" required="required" placeholder="phone Number"/>
                    <label htmlFor="phone" className=" text-success">Phone Number</label>
                  </div>

                  <div className="form-floating">
                    <textarea className="form-control h-auto border-0 border-bottom rounded-0" placeholder="Message" rows="5" id="floatingTextarea" required="required" data-validation-required-message="Please enter a message." aria-invalid="false"></textarea>
                    <label htmlFor="floatingTextarea" className=" text-success">Message</label>
                  </div>


                  <button type='submit' className='btn btn-success mt-3 btn-lg'>Send</button>

              </form>
            </div>
          </div>
           
      </div>
    </section>
  )
}
