import React from 'react'


export default function About(){
  return (
    <section className="home page-section text-white py-5 my-5  " id="about">
      <div className="container">

        {/* <!-- About Section Heading--> */}
        <h2 className="page-section-heading text-center text-uppercase text-white">About</h2>

        {/* <!-- Icon Divider--> */}
        <div className='divider-custom'>
                  <div className='divider-custom-line border-white bg-white'></div>
                  <div className="divider-custom-icon text-white"><i className="fas fa-star fa-2x "></i></div>
                  <div className="divider-custom-line border-white bg-white"></div>
        </div>

        {/* <!-- About Section Content--> */}
        <div className="row justify-content-center">
            <div className="col-lg-4 ml-auto"><p className="lead">Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p></div>
            <div className="col-lg-4 mr-auto"><p className="lead">You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p></div>
        </div>
        
      </div>
    </section>
  )
}
