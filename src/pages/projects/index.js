import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../../components/Layout"
import Img from "gatsby-image"
import "../../styles/global.css"
import "../../styles/projects.css"

export default function Projects({ data }) {
  let projects = data.projects.nodes

  return (
    <Layout>
      <div className="portfolio-container">
        <h2>Portfolio</h2>
        <div className="projects-container">
          {projects.map(project => (
            <div className="project-container" key={project.frontmatter.slug}>
              <Link
                to={"/projects/" + project.frontmatter.slug}
                key={project.id}
                className="project-link"
              >
                {project.frontmatter.thumb ? (
                  <div>
                    <Img
                      fluid={project.frontmatter.thumb.childImageSharp.fluid}
                      className="project-img"
                      imgStyle={{
                        objectFit: "contain",
                      }}
                    />
                  </div>
                ) : (
                  <div></div>
                )}

                <h3>{project.frontmatter.title}</h3>

                <p className="date">{project.frontmatter.date}</p>
                <p className="short-info">{project.frontmatter.short_info}</p>
                <div className="tags">
                  {project.frontmatter.tags.map(tag => (
                    <div className="tag" key={tag}>
                      {tag}
                    </div>
                  ))}
                </div>
              </Link>
              <div className="pj-links">
                {project.frontmatter.code !== "" ? (
                  <a
                    href={project.frontmatter.code}
                    className="github"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Code
                  </a>
                ) : (
                  <div className="disabled-link">Code</div>
                )}

                {project.frontmatter.web !== "" ? (
                  <a
                    href={project.frontmatter.web}
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
          ))}
        </div>
      </div>
    </Layout>
  )
}

//export page query
export const query = graphql`
  query ProjectsPage2 {
    projects: allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        frontmatter {
          title
          thumb {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
          short_info
          date(formatString: "DD.MM.YYYY")
          tags
          slug
          code
          web
        }
        id
      }
    }
  }
`
