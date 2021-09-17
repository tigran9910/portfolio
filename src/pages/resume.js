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
              Business Informatics student with experience in accounting and
              audit. Finished school in Moscow at the age of 16 with 2 golden
              medals and started living alone and studying in Germany. Learn Web
              Development and Machine Learning. Have created several websites
              and web apps, several ML projects with Python and a new very
              simple programming language on Typescript.
            </p>
          </div>
          <div className="section software">
            <h3 className="section-name">Software</h3>
            <ul>
              <li>
                <b>Languages:</b> Python, JavaScript, C#, Java, CSS, HTML, R
              </li>
              <li>
                <b>Technologies:</b> Linux, NodeJS, ExpressJS, TypeScript,
                React, Gatsby, Docker
              </li>
              <li>
                <b>Source Control:</b> Git
              </li>
              <li>
                <b>Databases:</b> MySQL, MongoDB
              </li>
              <li>
                <b>IDE:</b> Visual Studio Code, IntelliJ IDEA
              </li>
              <li>
                <b>Other:</b> Power Bi, Microsoft Office, Excel (VBA), DATEV,
                SAP
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
          <div className="section experience">
            <h3 className="section-name">Experience</h3>
            <ul>
              <li>
                <p className="exp-job">Audit Intern</p>
                <p className="exp-date">08/2019 - 10/2019 (2m)</p>
                <p className="exp-firm">Deloitte, Moscow, Russia</p>
              </li>
              <li>
                <p className="exp-job">Accounting Working Student</p>
                <p className="exp-date">11/2018 - 07/2019 (9m)</p>
                <p className="exp-firm">
                  Schürmann Steuerberatungsgesellschaft mbH, Berlin, Germany
                </p>
              </li>
            </ul>
          </div>
          <div className="section education">
            <h3 className="section-name">Education</h3>
            <ul>
              <li>
                <h4>Free University of Berlin</h4>
                <p className="edu-name">
                  B.Sc. Business Administration (Business Informatics
                  specialization)
                </p>
                <p className="edu-info">
                  2.7 GPA (good) - German grading system
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
