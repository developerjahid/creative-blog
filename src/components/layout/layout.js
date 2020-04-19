import React, { Fragment} from "react"
import PropTypes from "prop-types"
import Navbar from "./navbar/navbar"


const Layout = ({ children }) => {
  return (
    <Fragment>
      <Navbar />
        {children}

    </Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
