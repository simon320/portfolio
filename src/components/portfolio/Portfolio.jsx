import React, { useState } from 'react'
import './portfolio.css'
import IMG1 from '../../assets/mis-notas.png'
import IMG2 from '../../assets/coffee-off.png'
import IMG3 from '../../assets/dale-vida.png'
import IMG4 from '../../assets/pokedex.png'

const Portfolio = () => {
  const data = [
    {
      id: 1,
      image: IMG1,
      title: "misNotas",
      type: 'App',
      github: "https://github.com/simon320/todonote",
      page: "https://willowy-bombolone-122302.netlify.app/"
    },
    {
      id: 2,
      image: IMG2,
      title: "Coffee Off",
      type: 'Ecommerce',
      github: "https://github.com/simon320/ecommerce-coffee",
      page: "https://ecommerce-coffee-six.vercel.app/"
    },
    {
      id: 3,
      image: IMG3,
      title: "Dale Vida",
      type: 'Ecommerce',
      github: "https://github.com/simon320/ecommerce_firstMobile",
      page: "https://ecommerce-first-mobile.vercel.app/"
    },
    {
      id: 4,
      image: IMG4,
      title: "Pokedex",
      type: 'App',
      github: "https://github.com/simon320/pokedex",
      page: "https://warm-khapse-6166f9.netlify.app/"
    }
  ]

  const [selectedId, setSelectedId] = useState(null)
  return (
    <section id='portfolio'>
      <h5>Mis proyectos más recientes</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">

        {data.map((data)=>{
          return (

            <article key={data.id} className="portfolio__item">
              <div className="portfolio__item-img">
                <img src={data.image} alt="" />
              </div>
              <h3>{data.title}</h3> 
              <h5>{data.type}</h5>
              <div className="portfolio__item-cta">
                <a 
                  href={data.github} 
                  className="btn"
                  target="blank"
                  >
                  Github
                </a>
                <a
                  href={data.page}
                  className="btn btn-primary"
                  target="blank"
                  >
                  Visitar Pagina
                </a>
              </div>
            </article>
          
          )
        })}
        
        
      </div>
    </section>
  )
}

export default Portfolio