import * as React from 'react';
import { graphql as gql } from 'gatsby';
import Layout from '../components/Layout';

const IndexPage = ({ data }) => {
  const posts = data.allMarkdownRemark?.edges;
  console.log(posts);

  return (
    <Layout 
      pageTitle="Home"
    >
      <div>
        <p>Welcome to the gatsblog</p>

        <section>
          {posts.map(p => (
            <div 
              key={p.node.frontmatter.title} 
              className="post"
            >
              <header>
                <h3>{p.node.frontmatter.title}</h3>
                <h4 className="created-date">{p.node.frontmatter.date}</h4>
              </header>
              <p className="preview">{p.node.excerpt}</p>
            </div>
          ))}
        </section>
      </div>
    </Layout>
  )
}

export const query = gql`
  query {
    allMarkdownRemark(sort: { fields:frontmatter___date, order:DESC}) {
      edges {
        node {
          frontmatter {
            title
            date
          }
          excerpt
        }
      }
    }
  }
`

export default IndexPage
