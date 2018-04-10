import React from 'react'
import Link from 'gatsby-link'

class Template extends React.Component {
  render() {
    const { children } = this.props

    let header = (
      <h1>
        <Link to={`/`}>
          Gatsby Demo Blog
        </Link>
      </h1>
    )
    return (
      <div>
        {header}
        {children()}
      </div>
    )
  }
}

export default Template
