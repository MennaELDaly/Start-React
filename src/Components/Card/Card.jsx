import React from 'react'

export default function Card({url , title , id}){
  return (
    <>
      <div className="col-md-6 col-lg-4 mb-5">
          <figure className="portfolio-item mx-auto"  data-bs-toggle="modal" data-bs-target={'#'+id}>
              <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                  <div className="portfolio-icon text-center text-white">
                      <i className="fas fa-plus fa-3x"></i>
                  </div>
              </div>
              <img className="img-fluid" src={ require("../../imgs/"+url)} alt={title}/>
          </figure>
      </div>

    {/* Modal card */}
    <div className="modal fade modalImg " id={id} tabIndex="-1" aria-labelledby={id+'Label'} aria-hidden="true">
      <div className="modal-dialog modal-xl">
        <div className="modal-content">
        
          <button type="button" className="btn ms-auto" data-bs-dismiss="modal" aria-label="Close"><i className="fas fa-times fa-fw fa-3x text-success"></i></button>
        
          <div className="modal-body text-center">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                    
                  <h2 className="page-section-heading  text-uppercase mb-0" id="portfolioModal1Label">{title}</h2>
                
                  <div className="divider-custom">
                      <div className="divider-custom-line"></div>
                      <div className="divider-custom-icon"><i className="fas fa-star fa-2x"></i></div>
                      <div className="divider-custom-line"></div>
                  </div>
                  
                  <img className="img-fluid rounded mb-5" src={ require("../../imgs/"+url)} alt={title}/>
                  
                  <p className="mb-5 text-black">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                  
                  <button type="button" className="btn btn-success" data-bs-dismiss="modal">
                      <i className="fas fa-times fa-fw"></i>
                      Close Window
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
 
    </>
  )
}
