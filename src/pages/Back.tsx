import React from "react"
import { Link } from "gatsby"

const Back = () => {
  return (
    <>
      <h1> Yeahhhh I am in back page </h1>
      <Link to="/page-2/">go to second page</Link>
      <Link to="/layout/">go to home page</Link>
    </>
  )
}

export default Back
