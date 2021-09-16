import React from "react"
import Layout from "../components/Layout"
import Img from "gatsby-image"
import "../styles/project-details.css"
import "../styles/global.css"
import { graphql, Link } from "gatsby"

export default function ProjectDetails({ data }) {
  const { html } = data.markdownRemark
  const { title, tags, date, featuredImg, web, code } =
    data.markdownRemark.frontmatter

  return (
    <Layout>
      <div className="details">
        <Link className="go-back" to="/projects">
          Go Back To Portfolio
        </Link>
        <h2>{title}</h2>
        <h4 className="dateP">{date}</h4>

        {featuredImg ? (
          <div className="featured">
            <Img fluid={featuredImg.childImageSharp.fluid} />
          </div>
        ) : (
          <div></div>
        )}

        <div className="tagsP">
          {tags.map(tag => (
            <div className="tagP" key={tag}>
              {tag}
            </div>
          ))}
        </div>

        <div className="html" dangerouslySetInnerHTML={{ __html: html }} />

        <div className="pj-links">
          {code !== "" ? (
            <a
              href={code}
              className="github"
              target="_blank"
              rel="noopener noreferrer"
            >
              Code
            </a>
          ) : (
            <div className="disabled-link">Code</div>
          )}

          {web !== "" ? (
            <a
              href={web}
              className="host"
              target="_blank"
              rel="noopener noreferrer"
            >
              Website
            </a>
          ) : (
            <div className="disabled-link">Website</div>
          )}
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ProjectDetails($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        tags
        title
        web
        code
        date(formatString: "DD.MM.YYYY")
        featuredImg {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
