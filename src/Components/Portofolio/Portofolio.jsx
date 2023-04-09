import React from 'react'
import { useState } from 'react'
import Card from '../Card/Card'

export default function Portofolio() {

  const[imgUrls , setImgUrl]= useState([
    {idName:"cabin" , name:'log cabin' , url:'cabin.png'},
    {idName:"cake" , name:'tasty cake' , url:'cake.png'},
    {idName:"circus" , name:'circus tent' , url:'circus.png'},
    {idName:"game" , name:'game' , url:'game.png'},
    {idName:"safe" , name:'locked safe' , url:'safe.png'},
    {idName:"submarine" , name:'submarine' , url:'submarine.png'},
  ])

  return (
    
      <section className="Portofolio text-white mb-0 py-5 bg-white" id="about">
        <div className="container">

          <h2 className=" page-section-heading text-center text-uppercase">Portofolio</h2>

          <div className='divider-custom'>
              <div className='divider-custom-line'></div>
              <div className="divider-custom-icon"><i className="fas fa-star fa-2x "></i></div>
              <div className="divider-custom-line"></div>
          </div>

          <div className='row'>

            {imgUrls.map((ele ,idx)=> <Card key={idx} url={ele.url} title={ele.name} id={ele.idName}/>)}

            {/* <Card/> */}
          </div>
        </div>
      </section>
  )
}
