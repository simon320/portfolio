import React from "react";
import "./experience.css";
import {
  SiHtml5,
  SiCss3,
  SiSass,
  SiBootstrap,
  SiJavascript,
  SiReact,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiAdobexd,
  SiFirebase,
  SiRedux,
  SiAngular,
  SiTypescript,
  SiMongodb,
  SiJira,
  SiTrello,
  SiNodedotjs,
  SiNestjs
} from "react-icons/si";

const Experience = () => {
  return (
    <section id="experience">
      
      <h5>Algunas de las Tecnologias con las que hoy trabajo</h5>
      <h2>Experiencia en..</h2>

      <div className="container experience__container">

        <div className="experience__frontend">
          <h3>Lenguajes y Herramientas</h3>
          <div className="experience__content">
            <article className="experience__details">
              <SiHtml5 className="experience__details-icon" />
              <div>
                <h4>HTML</h4>
              </div>
            </article>
            <article className="experience__details">
              <SiCss3 className="experience__details-icon" />
              <div>
                <h4>CSS</h4>
              </div>
            </article>
            <article className="experience__details">
              <SiSass className="experience__details-icon" />
              <div>
                <h4>Sass</h4>
              </div>
            </article>
            <article className="experience__details">
              <SiBootstrap className="experience__details-icon" />
              <div>
                <h4>Bootstrap</h4>
              </div>
            </article>
            <article className="experience__details">
              <SiJavascript className="experience__details-icon" />
              <div>
                <h4>JavaScript</h4>
              </div>
            </article>
            <article className="experience__details">
              <SiTypescript className="experience__details-icon" />
              <div>
                <h4>TypeScript</h4>
              </div>
            </article>
            <article className="experience__details">
              <SiReact className="experience__details-icon" />
              <div>
                <h4>React</h4>
              </div>
            </article>
            <article className="experience__details">
              <SiRedux className="experience__details-icon" />
              <div>
                <h4>Redux</h4>
              </div>
            </article>
            <article className="experience__details">
              <SiAngular className="experience__details-icon" />
              <div>
                <h4>Angular</h4>
              </div>
            </article>
          </div>
        </div>

        <div className="experiencie__other">
          <h3>Otros Conocimientos</h3>
          <div className="experience__content">
            <article className="experience__details">
              <SiNodedotjs className="experience__details-icon" />
              <div>
                <h4>NodeJs</h4>
              </div>
            </article>
            <article className="experience__details">
              <SiFirebase className="experience__details-icon" />
              <div>
                <h4>Firebase</h4>
              </div>
            </article>
            <article className="experience__details">
              <SiMongodb className="experience__details-icon" />
              <div>
                <h4>MongoDB</h4>
              </div>
            </article>
            <article className="experience__details">
              <SiNestjs className="experience__details-icon" />
              <div>
                <h4>NestJs</h4>
              </div>
            </article>
            <article className="experience__details">
              <SiJira className="experience__details-icon" />
              <div>
                <h4>Jira</h4>
              </div>
            </article>
            <article className="experience__details">
              <SiTrello className="experience__details-icon" />
              <div>
                <h4>Trello</h4>
              </div>
            </article>
            <article className="experience__details">
              <SiAdobexd className="experience__details-icon" />
              <div>
                <h4>Adobe XD</h4>
              </div>
            </article>
            <article className="experience__details">
              <SiAdobephotoshop className="experience__details-icon" />
              <div>
                <h4>Photoshop</h4>
              </div>
            </article>
            <article className="experience__details">
              <SiAdobeillustrator className="experience__details-icon" />
              <div>
                <h4>Ilustrator</h4>
              </div>
            </article>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;
