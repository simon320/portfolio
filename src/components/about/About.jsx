import React from "react";
import "./about.css";
import ME from "../../assets/about-me.png";
import { MdAccessibilityNew } from "react-icons/md";
import { MdPhonelink } from "react-icons/md";
import { FiUsers } from "react-icons/fi";

const About = () => {
  return (
    <section id="about" className="about">
      <h5>Sobre</h5>
      <h2>Mi</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-img">
            <img src={ME} className="img2" alt="Imagen de Simon Juarez" />
          </div>
        </div>

        <div className="about__content">
          <p>
            ¡Hola! Mi nombre es Simón y me gusta crear Apps y paginas webs. Mi
            interés por la programación comenzo jugando con Arduino, un
            micro-controlador en el cual se usa un lenguaje similar a C++ para
            asignarle las entradas y salidas. Ahi descubri mi pasion por crear a
            traves de escribir codigo. En mi camino como desarrollador indague
            por leguajes como Java y Python, hasta que en el desarrollo web
            encontre mi lugar.
          </p>
          <p>
            Hoy en dia, desarrollo el Frontend de mis aplicaciones y uso
            Firebase como Backend, mientras me desarrollo como Fullstack con
            tecnologias como NodeJs.
          </p>

          <div className="about__cards">
            <article className="about__card">
              <MdAccessibilityNew className="about__icon" />
              <h5>Accesibilidad</h5>
            </article>

            <article className="about__card">
              <MdPhonelink className="about__icon" />
              <h5>Diseño responsivo</h5>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Apps escalables</h5>
            </article>
          </div>

          <a href="#contact" className="btn btn-primary about__button">
            Contactame
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
