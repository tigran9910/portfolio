import { Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import "../styles/resume.css"

export default function Resume() {
  return (
    <Layout>
      <div className="resume-container">
        <h2>Resume</h2>
        <div className="left">
          <div className="section summary">
            <h3 className="section-name">Summary</h3>
            <p>
              Business Informatics student working as a part-time Web Developer
              at BASF. Learn about Machine Learning in free time.
            </p>
          </div>
          <div className="section experience">
            <h3 className="section-name">Experience</h3>
            <ul>
              <li>
                <p className="exp-job">Web Development Working Student</p>
                <p className="exp-date">11/2021 - today</p>
                <p className="exp-firm">BASF, Berlin Germany</p>
                <p className="exp-description">
                  Updating one of the biggest internal web applications of BASF
                  Global Shared Services Centers (including core functions).
                  Writing documentation, test cases and testing application.
                  Created a general frontend component for all web applications
                  of internal GSS portal using external library.
                </p>
              </li>
              <li>
                <p className="exp-job">Audit Intern</p>
                <p className="exp-date">08/2019 - 10/2019 (2m)</p>
                <p className="exp-firm">Deloitte, Moscow Russia</p>
              </li>
              <li>
                <p className="exp-job">Accounting Working Student</p>
                <p className="exp-date">11/2018 - 07/2019 (9m)</p>
                <p className="exp-firm">
                  Schürmann Steuerberatungsgesellschaft mbH, Berlin Germany
                </p>
              </li>
            </ul>
          </div>
          <div className="section projects">
            <h3 className="section-name">Projects</h3>
            <div className="proj-btn-container">
              <Link className="proj-btn" to="/projects">
                My Portfolio Projects
              </Link>
            </div>
          </div>
        </div>

        <div className="right">
          <div className="section education">
            <h3 className="section-name">Education</h3>
            <ul>
              <li>
                <h4>Free University of Berlin</h4>
                <p className="edu-name">
                  B.Sc. Business Administration (majoring in Business
                  Informatics)
                </p>
                <p className="edu-info">
                  2.8 GPA (satisfactory) - German grading system
                </p>
                <p className="edu-info">
                  <b>Courses:</b> OOP (Java), IT for Economists (C#)
                </p>
              </li>
              <li>
                <h4>Philipps University of Marburg</h4>
                <p className="edu-name">
                  Preparatory College, Economics course
                </p>
                <p className="edu-info">
                  1.1 GPA (excellent) - German grading system
                </p>
              </li>
            </ul>
          </div>
          <div className="section software">
            <h3 className="section-name">Software</h3>
            <ul>
              <li>
                <b>Languages:</b> Python, JavaScript, C#, Java, CSS, HTML, R
              </li>
              <li>
                <b>Technologies:</b> Linux, NodeJS, ExpressJS, TypeScript,
                Groovy, React, Gatsby, React Native, Docker
              </li>
              <li>
                <b>Source Control:</b> Git, Subversion
              </li>
              <li>
                <b>Databases:</b> Oracle SQL, MySQL, MongoDB
              </li>
              <li>
                <b>IDE:</b> Visual Studio Code, IntelliJ IDEA
              </li>
              <li>
                <b>Other:</b> Azure DevOps, Jira, DATEV, SAP
              </li>
            </ul>
          </div>
          <div className="section languages">
            <h3 className="section-name">Languages</h3>
            <ul>
              <li>
                <p className="language">Russian</p>
                <p className="lang-lvl">native</p>
              </li>
              <li>
                <p className="language">Armenian</p>
                <p className="lang-lvl">native</p>
              </li>
              <li>
                <p className="language">English</p>
                <p className="lang-lvl">C1 | fluent</p>
              </li>
              <li>
                <p className="language">German</p>
                <p className="lang-lvl">C1 | fluent</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  )
}
