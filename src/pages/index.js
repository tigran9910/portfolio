import React from "react"
import Layout from "../components/Layout"
import "../styles/index.css"
import { Link } from "@reach/router"
import { StaticImage } from "gatsby-plugin-image"
// import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"

export default function Home({ data }) {
  // const images = data.allFile.nodes

  return (
    <Layout>
      <section className="header">
        <div>
          <div>
            <StaticImage
              src="../images/mainbackground/city1.jpg"
              alt="Night city view background image"
              className="background-img pc-img"
              style={{ display: "inherit" }}
            />
          </div>
          <div>
            <StaticImage
              src="../images/mainbackground/city2.jpg"
              alt="Night city view background image"
              className="background-img mobile-img"
              style={{ display: "inherit" }}
            />
          </div>
          {/* {images.map((img, index) => (
            <GatsbyImage
              image={getImage(img.childImageSharp)}
              alt={img.name}
              key={img.name}
              className="background-img"
              // style={{
              //   position: "absolute",
              //   top: "0",
              //   left: "0",
              //   zIndex: "-1",
              //   objectFit: "cover",
              // }}
              formats={["auto", "webp", "avif"]}
            ></GatsbyImage>
          ))} */}

          <div className="text-on-image">
            <h2>Tigran Melkumyan</h2>
            <p>
              Business Informatics Student & Full Stack Developer based in
              Berlin
            </p>
            <div className="buttons-on-image">
              <Link className="btn resumebtn" to="/resume">
                My Resume
              </Link>
              <a
                href="mailto: tigranmelkumyan0@gmail.com"
                className="btn contactbtn"
              >
                Contact
              </a>
              <Link className="btn portfoliobtn" to="/projects">
                My Portfolio Projects
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query Banner {
    allFile(
      filter: {
        relativePath: { regex: "/mainbackground*/" }
        sourceInstanceName: { eq: "images" }
      }
      sort: { fields: name }
    ) {
      nodes {
        name
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  }
`
