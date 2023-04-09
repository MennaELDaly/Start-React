import React from 'react'
import logo from './avataaars.svg'

export default function Home() {
  
  return <>

      <header className="home text-white text-center py-5 mt-5">
            <div className="container d-flex align-items-center flex-column">
                {/* <!-- home Avatar Image--> */}
                <figure>
                  <img className="home-avatar mb-5 w-75" src={logo} alt="logo"/>
                </figure>
                
                {/* <!-- home Heading--> */}
                <h1 className="home-heading text-uppercase mb-0">Start React</h1>
                {/* <!-- Icon Divider--> */}
                <div className='divider-custom'>
                    <div className='divider-custom-line border-white bg-white'></div>
                    <div className="divider-custom-icon text-white"><i className="fas fa-star fa-2x "></i></div>
                    <div className="divider-custom-line border-white bg-white"></div>
                </div>
                {/* <!-- home Subheading--> */}
                <p className="home-subheading fw-normal fs-4 mb-0">Graphic Artist - Web Designer - Illustrator</p>
            </div>
      </header>

    </>
  
}
