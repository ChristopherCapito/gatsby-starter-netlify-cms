import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'

// class Faq extends React.Component {
//   render() {
//     //const { data } = this.props
//    // const { edges: posts } = data.allMarkdownRemark

//     return (
//       <div className="columns is-multiline">
//         <p>Hello World</p>
//       </div>
//     )
//   }
// }

const Faq = () => {
  return (
    <div>
      <ul style={{listStyle:'none'}}>
        <li>
          <header>
        <p className="post-meta">
                    <Link
                      className="title has-text-primary is-size-4"
                      to="#"
                    >
                      Was ist eigentlich Risiko?
                    </Link>
                  </p>
          </header>
        </li>
      </ul>
    </div>
  )
}

export default Faq


// Faq.propTypes = {
//   data: PropTypes.shape({
//     allMarkdownRemark: PropTypes.shape({
//       edges: PropTypes.array,
//     }),
//   }),
// }

// export default () => (
//   <StaticQuery
//     query={graphql`
//       query FaqQuery {
//       }
//     `}
//     render={(data, count) => <Faq data={data} count={count} />}
//   />
// )
