import * as React from 'react';
import { graphql as gql } from 'gatsby';

import BlogLayout from '../components/BlogLayout';

export default function({ data }) {
  const title = data?.markdownRemark?.frontmatter?.title;
  const html = data?.markdownRemark?.html;

  return (
    <BlogLayout pageTitle={title}>
      <section className="content" dangerouslySetInnerHTML={{ __html: html }} />
    </BlogLayout>
  )
}

export const query = gql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`