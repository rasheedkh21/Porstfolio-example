import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        {/*  UI/UX */}
        {/* <article className="service">
          <div className="services__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="services__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
          </ul>
        </article> */}

        {/* Web Development*/}
        <article className="service">
          <div className="services__head">
            <h3>Web Development</h3>
          </div>

          <ul className="services__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p> Front-End Development</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p> Backend Development</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Responsive Web Development</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p> eCommerce Development </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p> Progressive Web Apps (PWAs) Development</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Single-Page Application (SPA) Development</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>API Development</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p> Database Development</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Web Application Security</p>
            </li>
          </ul>
        </article>

        {/* Content Creation*/}
        <article className="service">
          <div className="services__head">
            <h3>Content Creation</h3>
          </div>

          <ul className="services__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Rules-Based Model</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Context Management..</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Powerful Pattern Matching</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Scalable Streaming Architecture.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Full SGML/XML.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
