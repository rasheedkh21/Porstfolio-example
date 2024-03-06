import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/camper.jpg";
import IMG2 from "../../assets/design.jpg";
import IMG3 from "../../assets/lms.jpg";
import IMG4 from "../../assets/menu.jpg";
import IMG5 from "../../assets/bitcoin.jpg";
import IMG6 from "../../assets/Jobify.jpg";
import IMG7 from "../../assets/camperadmin.jpg";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>Check out my projects</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>Camper for camping with responsive and backend server. Admin dashboard is available</h3>

          <div className="portfolio__item-cta">
            <div>
              <a href="https://github.com/rasheedkh21/camping-client" className="btn">
                Github
              </a>
            </div>

            <div>
              <a href="https://rasheedscamperclient.netlify.app/home" className="btn btn-primary" target="_blank">
                Live Demo
              </a>
            </div>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG7} alt="Admin camper" />
          </div>
          <h3>Platform Camper admin for adding car info with backend server. Responsive is not available</h3>
          <div className="portfolio__item-cta">
            <a href="hhttps://github.com/rasheedkh21/camping-admin-page" className="btn">
              Github
            </a>
            <a href="https://camperadmin.netlify.app/home" className="btn btn-primary" target="_blank">
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>Design Fashion Landing page without responsive and backend server</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/rasheedkh21/Design-fashion-react" className="btn">
              Github
            </a>
            <a href="https://rasheedsdesign.netlify.app/" className="btn btn-primary" target="_blank">
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>LMS system Landing page without responsive and backend server</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/rasheedkh21/LMS-Master-React" className="btn">
              Github
            </a>
            <a href="https://rasheedslms.netlify.app/" className="btn btn-primary" target="_blank">
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>Menu landing page made with Tailwind Css. Without responsive and backend server </h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/rasheedkh21/Manu-tailwind" className="btn">
              Github
            </a>
            <a href="https://rasheedsmenu.netlify.app/" className="btn btn-primary" target="_blank">
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG5} alt="" />
          </div>
          <h3>Crypto landing page made with Tailwind Css, React Js and Styled-components. Without responsive and backend server</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/rasheedkh21/Bitcoin-page-react-tailwind" className="btn">
              Github
            </a>
            <a href="https://rasheedscrypto.netlify.app/" className="btn btn-primary" target="_blank">
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG6} alt="jobify img" />
          </div>
          <h3>Platform Jobify for searching job with responsive. Admin dashboard is available with backend server</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/rasheedkh21/job-client" className="btn">
              Github
            </a>
            <a href="https://rasheedsjobify.netlify.app/" className="btn btn-primary" target="_blank">
              Live Demo
            </a>
          </div>
        </article>

      </div>
    </section>
  );
};

export default Portfolio;
