import React from 'react'
import { Footer, Blog, Features, Header, Possibility, WhatGPT4 } from './containers'
import { Article, Brand, CTA, Feature, Navbar } from './components'
import './App.css'

const MainApp = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT4 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
        
    </div>
  )
}

export default MainApp