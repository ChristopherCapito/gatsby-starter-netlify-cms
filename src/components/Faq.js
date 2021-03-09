import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'
class Faq extends React.Component {
    render() {
        const { data } = this.props
        const { edges: entries } = data.allMarkdownRemark

        return (
            <div>
                <ul style={{ listStyle: 'none' }}>
                    {entries &&
                        entries.map(({ node: entry }) => (
                            <li>
                                <header>
                                    <p className="post-meta">
                                        <Link
                                            className="title has-text-primary is-size-4"
                                            to="#"
                                        >
                                            {entry.frontmatter.title}
                                        </Link>
                                    </p>
                                </header>
                                <video width="320" height="240" controls>
                                    <source
                                        src={entry.frontmatter.featuredVideo}
                                        type="video/mp4"
                                    />
                                    Your browser does not support the video tag.
                                </video>
                                <p>{entry.excerpt}</p>
                                <Link className="button" to={entry.fields.slug}>
                                    Mehr lesen
                                </Link>
                            </li>
                        ))}
                </ul>
            </div>
        )
    }
}

export default () => (
    <StaticQuery
        query={graphql`
            query FaqEntries {
                allMarkdownRemark(
                    filter: {
                        frontmatter: { templateKey: { eq: "faq-entry" } }
                    }
                ) {
                    edges {
                        node {
                            excerpt
                            frontmatter {
                                title
                                date
                                featuredVideo
                            }
                            headings {
                                id
                            }
                            rawMarkdownBody
                            fields {
                                slug
                            }
                        }
                    }
                }
            }
        `}
        render={(data, count) => <Faq data={data} count={count} />}
    />
)

Faq.propTypes = {
    data: PropTypes.shape({
        allMarkdownRemark: PropTypes.shape({
            //edges: PropTypes.array,
        }),
    }),
}
