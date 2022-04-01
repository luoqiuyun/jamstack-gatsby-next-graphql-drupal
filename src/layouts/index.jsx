import React from "react"
import "typeface-rochester"
import "typeface-josefin-sans"
import "typeface-josefin-slab"

import Header from "./Header"
import TitleBar from "./TitleBar"
import Footer from "./Footer"

class DefaultLayout extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <TitleBar />
        {this.props.children}
        <Footer />
      </div>
    )
  }
}

export default DefaultLayout
