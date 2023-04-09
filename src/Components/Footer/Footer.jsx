import React from 'react'
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <>
      <footer className="footer text-center ">
            <div className="container py-5 mb-3">
                <div className="row">
                    {/* <!-- Footer Location--> */}
                    <div className="col-lg-4 mb-5 mb-lg-0">
                        <h4 className='text-uppercase mb-4'>Location</h4>
                        <p className="mb-0 px-5">
                            2215 John Daniel Drive Clark, MO 65243
                        </p>
                    </div>
                    {/* <!-- Footer Social Icons--> */}
                    <div className="col-lg-4 mb-5 mb-lg-0">
                        <h4 className="text-uppercase mb-4">Around the Web</h4>
                        <Link className="btn btn-outline-light btn-social mx-1"><i className="fa-brands fa-facebook-f"></i></Link>
                        <Link className="btn btn-outline-light btn-social mx-1"><i className="fa-brands fa-twitter"></i></Link>
                        <Link className="btn btn-outline-light btn-social mx-1"><i className="fa-brands fa-linkedin-in"></i></Link>
                        <Link className="btn btn-outline-light btn-social mx-1"><i className="fa-brands fa-dribbble"></i></Link>
                    </div>
                    {/* <!-- Footer About Text--> */}
                    <div className="col-lg-4">
                        <h4 className="text-uppercase mb-4">About Freelancer</h4>
                        <p className="mb-0 px-5">
                            Freelance is a free to use, MIT licensed Bootstrap theme created by Route
                        </p>
                    </div>
                </div>
            </div>

            <div className='py-3 text-center copyright'>
                <small>Copyright © Your Website 2021</small>
            </div>
      </footer>


      
    </>
    
    )
}
